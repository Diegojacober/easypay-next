import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import TransferSection from "@/components/TransfersSection";
import Head from "next/head";
import styles from "@/styles/User.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Opaa</title>
            </Head>

            <Header/>
            <main className={styles.main}>
                <TransferSection/>
                <CardSection/>
            </main>
        </>
    )
}