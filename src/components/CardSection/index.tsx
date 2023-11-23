import Card from "../Card";
import { Container, Title } from "./styled";


export default function CardSection() {
    return (
        <Container>
            <Title>My cards</Title>

            <Card card={{
                cardNumber: "4556 3325 8590 3732",
                cardName: "Salman",
                cvv: 334,
                date: '10/30',
                id: 5
            }}/>
        </Container>
    )
}