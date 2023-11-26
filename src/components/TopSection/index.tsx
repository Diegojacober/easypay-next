import styles from "./style.module.css";
import Image from "next/image";
import phone from "@/../public/assets/phone.svg";
import phones from "@/../public/assets/phones.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

interface TopSectionProps {
  topText: string;
  mainText: string;
  buttonText: string;
}

export default function TopSection({
  topText,
  mainText,
  buttonText,
}: TopSectionProps) {
  return (
    <section className={styles.container}>
      <div className={styles.leftDiv}>
        <Image
          className={styles.imagePhones}
          alt="Iphone 13 pro"
          src={phones}
          priority
        />
      </div>

      <div className={styles.centerDiv}>
        <span className={styles.topText}>{topText}</span>
        <h1 className={styles.mainText}>{mainText}</h1>
        <Link href={"/register"} className={styles.mainButton}>
          {buttonText} <AiOutlineArrowRight size={14} color="##3883BB" />
        </Link>
      </div>

      <div className={styles.rightDiv}>
        <Image
          className={styles.imagePhone}
          alt="Iphone 13"
          src={phone}
          priority
        />
      </div>
    </section>
  );
}
