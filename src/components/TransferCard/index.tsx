import Image from "next/image";
import receiver from "@/../public/assets/get-trans.svg";
import sender from "@/../public/assets/to-transfer.svg";
import { Card, ImageArea, InfoArea, ValueArea } from "./styled";

type Transfer = {
    id: number;
    date: string;
    type: string;
    value: number;
};

interface ITransferCard {
    transfer: Transfer;
}

export default function TransferCard({ transfer }: ITransferCard) {
    return (
        <Card>
            <InfoArea>
                <ImageArea>
                    <Image alt="opa" src={transfer.type == "sender" ? sender : receiver} />
                </ImageArea>
                <div>
                    <p>{transfer.type == "sender" ? `To loggedUser` : `For me`}</p>
                    <small>{transfer.date}</small>
                </div>
            </InfoArea>

            <ValueArea>
                <p>{transfer.type == "sender" ? `- $${transfer.value}` : `+ $${transfer.value}`}</p>
            </ValueArea>
        </Card>
    )
}