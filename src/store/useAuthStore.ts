import api from "@/services/api";
import Router from "next/router";
import { setCookie } from 'nookies'
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
    getUser: (token: string) => void;
    signIn: (email: string, password: string) => void;
    logout: () => void;
};

interface AuthApiResponse {
    access: string;
    refresh: string;
}

const useAuthStore = create(
    persist<UserStore>(
        (set) => ({
            user: null,
            accessToken: '',
            refreshToken: '',
            isAuthenticated: false,
            signIn: async (email: string, password: string) => {
                const { data, status } = await api.post<AuthApiResponse>("/token/", {
                    email,
                    password
                })

                if (status == 200) {
                    set((state) => ({
                        accessToken: data.access,
                        refreshToken: data.refresh,
                        isAuthenticated: true
                    }));
                    setCookie(null, 'user', 'accessToken', {
                        token: data.access
                      })
                    Router.push("/home")
                }
            },
            getUser: async (token: string) => {

                const { data, status } = await api.get<User>("/user/me/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (status == 200) {
                    set((state) => ({
                        user: data
                    }))
                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                }
            },
            logout: () => {
                set((state) => ({
                    accessToken: '',
                    refreshToken: '',
                    user: null,
                    isAuthenticated: false,
                }))
            }
        }), {
        name: 'user-storage'
    }
    ));

export default useAuthStore;
