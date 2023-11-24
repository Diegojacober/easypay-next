import { useEffect, useState } from "react";
import TransferCard from "../TransferCard";
import { Container, Loader, Title } from "./styled";
import api from "@/services/api";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import { Transfer } from "@/queries/transfers/types";



export default function TransferSection() {

    const [transferencias, setTransferencias] = useState<Transfer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [account] = useAuthStore(
        (state) => [
            state.account,
        ]
    );

    useEffect(() => {
        async function getTransfers() {
            api.get<Transfer[]>("/v1/transferencias/").then((resp) => {
                setTransferencias(resp.data)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                if (err.response.status !== 401) {
                    toast.error("Erro ao carregar transferências, Tente novamente mais tarde!")
                }

            })
        }

        getTransfers()
    });

    if (loading) {
        return (
            <Container>
                <Title>Transfers</Title>

                <Loader />
            </Container>
        )
    }

    return (
        <Container>
            <Title>Transfers</Title>

            {(transferencias.length > 0) ? (
                <>
                    {transferencias.map(transferencia => (
                        <TransferCard key={transferencia.id} transfer={{
                            id: transferencia.id,
                            type: account?.id !== transferencia.to_account_id ? 'sender' : 'receiver',
                            value: transferencia.value,
                            date: transferencia.created_at,
                            name: ` ${transferencia.to_account.agencia}  ${transferencia.to_account.numero}`
                        }}/>
                    ))}
                </>
            ) : (
                <p style={{ color: '#FFF' }}>Nenhuma transferencia...</p>
            )}
        </Container>
    )
}