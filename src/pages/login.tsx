import Theme from "@/styles/Theme";
import Head from "next/head";
import image from "@/../public/assets/finnancas-image.svg";
import styles from "@/styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Login() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <>
            <Head>
                <title>Login - EasyPay Bank</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <article className={styles.formArea}>
                        <div className={styles.formDetails}>
                            <h2>Login</h2>
                            <p>Enter you account details</p>
                        </div>

                        <form className={styles.form}>
                            <div className={styles.inputArea}>
                                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className={styles.inputArea}>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>

                            <button type="submit">Login</button>
                        </form>
                    </article>

                    <div className={styles.bottomArea}>
                        <p>Don't have an account?</p>
                        <Link passHref href="/signup" legacyBehavior>
                            <a>Sign up</a>
                        </Link>
                    </div>
                </section>

                <section className={styles.ads}>
                    <div className={styles.title}>
                        <h3>Welcome to <span>Easy pay</span></h3>
                        <small>Login to access your account</small>
                    </div>

                    <div className={styles.imageSection}>
                        <Image alt="Image" src={image} className={styles.image} />
                    </div>
                </section>
            </main>
        </>
    )
}