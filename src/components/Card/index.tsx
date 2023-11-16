import { FaLock } from "react-icons/fa";
import { Button, CardArea, Container } from "./styled"

type CardType = {
    id: number
    cvv: number
    cardNumber: string
    cardName: string
}

interface ICardProps {
    card: CardType;
}

export default function Card({ card }: ICardProps) {
    return (
        <Container>
            <CardArea>

            </CardArea>

            <Button>
                <div><FaLock size={18}/></div>
                <p>Lock</p>
            </Button>
        </Container>
    );
}