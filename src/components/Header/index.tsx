import styles from "./style.module.css";
import Link from "next/link";
import logo from "@/../public/assets/logo.svg";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import useAuthStore from "@/store/useAuthStore";
import { useEffect, useState } from "react";

export default function Header() {
  const [isAuthenticated, logout] = useAuthStore(
    (state) => [
      state.isAuthenticated,
      state.logout
    ]
  );

  const router = useRouter()

  // https://nextjs.org/docs/messages/react-hydration-error
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
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
