import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import TransferSection from "@/components/TransfersSection";
import Head from "next/head";
import styles from "@/styles/User.module.css";
import useAuthStore from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import Router from "next/router";
import UserSection from "@/components/UserSection";



export default function Home() {
    const [getUser, isAuthenticated, token, account] = useAuthStore(
        (state) => [
            state.getUser,
            state.isAuthenticated,
            state.accessToken,
            state.account
        ]
    );

    useEffect(() => {
        async function loadPage() {
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
                <title>Home</title>
            </Head>

            <Header/>
            <UserSection/>
            <main className={styles.main}>
                <TransferSection />
                <CardSection />
            </main>
        </>
    )
}