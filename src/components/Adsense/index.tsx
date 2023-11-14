import styles from './style.module.css';
import Link from 'next/link';
import card1 from '@/../public/assets/card1-mage.svg';
import card2 from '@/../public/assets/card2-image.svg';
import Image from 'next/image';
import { IoMdArrowForward } from "react-icons/io";

export default function Adsense() {
    return (
        <div className={styles.adsenseBody}>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <p>Your money, your choices. invest from your away.</p>
                    <Link href="/" className={styles.cardButton}>Know easy invest <IoMdArrowForward size={26}/></Link>
                </div>
                <div>
                    <Image className={styles.cardImage} alt='image' src={card1} priority />
                </div>
            </div>

            <div className={styles.card}>
                <div>
                    <Image className={styles.cardImage} alt='image' src={card2} priority />
                </div>

                <div className={styles.cardBody}>
                    <p>Take your actions where you want and when you need to.</p>
                    <Link href="/" className={styles.cardButton}>Register now <IoMdArrowForward size={26}/></Link>
                </div>  
            </div>
        </div>
    )
}
