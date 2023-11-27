import api from "@/services/api";
import Router from "next/router";
import { setCookie } from 'nookies'
import { FieldValues, UseFormReset } from "react-hook-form";
import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
    email: string,
    first_name: string,
    last_name: string,
    cpf: string,
    url_image: string
}

interface UserStore {
    user: User | null;
    accessToken: string;
    refreshToken: string;
    isAuthenticated: boolean;
    account: Account | null;
    getUser: (token: string) => void;
    signIn: (email: string, password: string, reset: UseFormReset<FieldValues>) => void;
    signUp: (email: string, password: string, firstName: string, lastName: string, cpf: string, reset: UseFormReset<FieldValues>) => void;
    logout: () => void;
};

interface AuthApiResponse {
    access: string;
    refresh: string;
}

interface SignUpResponse {
    email: string,
    first_name: string,
    last_name: string,
    cpf: string,
    url_image: string
}

interface Account {
    id: number,
    agencia: string,
    numero: string
}

const useAuthStore = create(
    persist<UserStore>(
        (set) => ({
            user: null,
            accessToken: '',
            refreshToken: '',
            account: null,
            isAuthenticated: false,
            signIn: async (email: string, password: string, reset: UseFormReset<FieldValues>) => {
                await api.post<AuthApiResponse>("/token/", {
                    email,
                    password
                }).then((resp) => {
                    set((state) => ({
                        accessToken: resp.data.access,
                        refreshToken: resp.data.refresh,
                        isAuthenticated: true
                    }));
                    setCookie(null, 'user', 'accessToken', {
                        token: resp.data.access
                    })
                    reset();
                    Router.push("/home")
                }).catch((error) => {

                    if (error.response.status == 401 || error.response.status == 500) {
                        toast.error("Dados incorretos")
                    }
                })
            },
            getUser: async (token: string) => {

                await api.get<User>("/user/me/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(async (resp) => {
                    if (resp.status == 200) {
                        set((state) => ({
                            user: resp.data
                        }))
                        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                        await api.get<Account[]>("/v1/accounts/").then(async (resp) => {
                            if (resp.data.length < 1) {
                                await api.post("/v1/accounts/").then(async (response) => {
                                    if (response.data.message == "created") {
                                        toast.info("Uma nova conta acaba de ser criada")
                                        await api.get<Account[]>("/v1/accounts/").then(accounts => {
                                            set((state) => ({
                                                account: accounts.data[0]
                                            }))
                                        })
                                    }
                                })
                            } else {
                                set((state) => ({
                                    account: resp.data[0]
                                }))
                            }
                        }).catch(err => {})
                    }
                }).catch(erro => {
                    if (erro.response.status === 401) {
                        set((state) => ({
                            accessToken: '',
                            refreshToken: '',
                            user: null,
                            isAuthenticated: false,
                        }))
                        Router.push("/login")
                        toast.info("Sessão expirada! faça login novamente")
                    }
                })
            },
            logout: () => {
                set((state) => ({
                    accessToken: '',
                    refreshToken: '',
                    user: null,
                    isAuthenticated: false,
                }))
            },
            signUp: async (email: string, password: string, firstName: string, lastName: string, cpf: string, reset: UseFormReset<FieldValues>) => {

                await api.post<SignUpResponse>("/user/create/", {
                    email,
                    password,
                    first_name: firstName,
                    last_name: lastName,
                    cpf
                }).then((resp) => {
                    toast.success("Usuário cadastrado com sucesso!!")
                    reset()
                }).catch((error) => {
                    const resp = error.response
                    if (error.code == "ERR_BAD_REQUEST") {
                        for (const field in resp.data) {
                            toast.error(resp.data[field])
                        }
                    }
                })
            },
        }), {
        name: 'user-storage'
    }
    ));

export default useAuthStore;
