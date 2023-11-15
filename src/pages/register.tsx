import Head from "next/head";
import { useState } from "react";
import image from "@/../public/assets/finnancas-image.svg";
import styles from "@/styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [CPF, setCPF] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <Head>
        <title>Register - EasyPay Bank</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.content}>
          <article className={styles.formArea}>
            <div className={styles.formDetails}>
              <h2>Register</h2>
              <p>Create your account</p>
            </div>

            <form className={styles.form}>
              <Input
                type="email"
                value={email}
                set={setEmail}
                placeholder="E-mail"
              />

              <Input
                type="text"
                value={firstName}
                set={setFirstName}
                placeholder="First Name"
              />

              <Input
                type="text"
                value={lastName}
                set={setLastName}
                placeholder="Last Name"
              />

              <Input
                type="text"
                value={CPF}
                set={setCPF}
                placeholder="CPF(no special characters)"
              />

              <Input
                type="password"
                value={password}
                set={setPassword}
                placeholder="Password"
              />

              <button type="submit">Register</button>
            </form>
          </article>

          <div className={styles.bottomArea}>
            <p>I've an account</p>
            <Link passHref href="/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </div>
        </section>

        <section className={styles.ads}>
          <div className={styles.title}>
            <h3>
              Welcome to <span>Easy pay</span>
            </h3>
            <small>Login to access your account</small>
          </div>

          <div className={styles.imageSection}>
            <Image alt="Image" src={image} className={styles.image} />
          </div>
        </section>
      </main>
    </>
  );
}
