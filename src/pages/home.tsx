import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import TransferSection from "@/components/TransfersSection";
import Head from "next/head";
import styles from "@/styles/User.module.css";
import useAuthStore from "@/store/useAuthStore";
import { useEffect } from "react";
import Router from "next/router";

export default function Home() {
    const [getUser, isAuthenticated, token] = useAuthStore(
        (state) => [
            state.getUser,
            state.isAuthenticated,
            state.accessToken
        ]
    );

    useEffect(() => {
        function loadPage() {
            if (isAuthenticated) {
                getUser(token)
            } else {
                Router.push("/login")
            }
        }

        loadPage()
    }, [isAuthenticated]);

    return (
        <>
            <Head>
                <title>Opaa</title>
            </Head>

            <Header/>
            <main className={styles.main}>
                <TransferSection />
                <CardSection />
            </main>
        </>
    )
}