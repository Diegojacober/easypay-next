import styles from "./style.module.css";
import Link from "next/link";
import logo from "@/../public/assets/logo.svg";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import useAuthStore from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Header() {

  // https://nextjs.org/docs/messages/react-hydration-error
  const [isClient, setIsClient] = useState<boolean>(false)
  const [dolar, setDolar] = useState<number>(0.0)
  const router = useRouter()


  const [isAuthenticated, logout] = useAuthStore(
    (state) => [
      state.isAuthenticated,
      state.logout
    ]
  );

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });


  useEffect(() => {
    async function getApi() {
      await axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL").then((resp) => {
        setDolar(resp.data.USDBRL.ask)
      }).catch(err => {
        toast.error("Erro ao conectar com o servidor de moedas!")
      })
    }
    getApi()
    setIsClient(true)
  }, [])

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          {isAuthenticated && isClient ? (
            <p style={{ color: "#FFF", borderBottom: "1px solid #FFF" }}>Dólar hoje(USD): {formatter.format(dolar)}</p>
          ) : (
            <Link href="/" style={{ textDecoration: "None" }}>
              <div className={styles.logoContent}>
                <Image
                  className={styles.logo}
                  alt="logo easypay bank"
                  src={logo}
                  priority
                />
                <p>EasyPay Bank</p>
              </div>
            </Link>
          )}

          <div className={styles.navLinks}>

            {isAuthenticated && isClient ? (
              <>
              </>
            ) : (
              <div className={styles.navOptions}>
                <Link href="/about" className={styles.link}>
                  The Bank
                </Link>
                <Link href="/explore" className={styles.link}>
                  For you
                </Link>
                <Link href="/blog" className={styles.link}>
                  Blog
                </Link>
              </div>
            )}

            {isAuthenticated && isClient ? (
              <div className={styles.navButtons}>
                <button onClick={logout} className={styles.logoutButton}>Logut</button>
              </div>
            ) : (
              <div className={styles.navButtons}>
                <button onClick={() => router.push('/register', { scroll: false })} className={styles.createButton}>Create Account</button>
                <button onClick={() => router.push('/login', { scroll: false })} className={styles.loginButton}>Access</button>
              </div>
            )}
          </div>
        </nav>
      </section>
    </header>
  );
}
