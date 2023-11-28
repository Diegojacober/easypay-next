import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import api from "../../services/api";
import { Transfer } from "./types";
import { toast } from "react-toastify";


async function getTransfers(ctx: QueryFunctionContext) {
    api.get<Transfer[]>("/v1/transferencias/")
    .then((resp) => {
        const transferencias = resp.data
        return transferencias
    }).catch(err => {
        console.log(err)
        if (err.response.status !== 401) {
            toast.error("Erro ao carregar transferências, Tente novamente mais tarde!")
        }
    })
}

//adicionando camada de cache
export default function useFetchTrans() {
    return useQuery({ queryKey: ["transfers"], queryFn: getTransfers });
}