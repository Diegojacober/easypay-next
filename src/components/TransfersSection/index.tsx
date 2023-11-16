import TransferCard from "../TransferCard";
import { Container, Title } from "./styled";


export default function TransferSection() {
    return (
        <Container>
            <Title>Transfers</Title>

            <TransferCard transfer={{
                date: "16/11/2023",
                id: 1,
                type: "sender",
                value: 500.0
            }} />

            <TransferCard transfer={{
                date: "25/11/2023",
                id: 2,
                type: "receiver",
                value: 800.0
            }} />
        </Container>
    )
}