import { FaLock } from "react-icons/fa";
import { Button, CardArea, Container } from "./styled"
import visaLogo from "@/../public/assets/visa-logo.svg";
import chip from "@/../public/assets/chip-card.svg";
import Image from "next/image";

type CardType = {
    id: number
    cvv: number
    cardNumber: string
    cardName: string
    date: string
}

interface ICardProps {
    card: CardType;
}

export default function Card({ card }: ICardProps) {
    return (
        <Container>
            <CardArea>
                <div className="card--header">
                    <Image src={visaLogo} alt="Visa logo" height={28}/>
                </div>
                <div className="card--chip">
                    <Image src={chip} alt="chip card" height={38}/>
                </div>

                <div className="card--infos">
                    <h3>{card.cardNumber}</h3>
                    <div className="infos">
                        <p>{card.cardName}</p>
                        <p>{card.date}</p>
                        <p>{card.cvv}</p>
                    </div>
                </div>
            </CardArea>

            <Button>
                <div><FaLock size={18} /></div>
                <p>Lock</p>
            </Button>
        </Container>
    );
}