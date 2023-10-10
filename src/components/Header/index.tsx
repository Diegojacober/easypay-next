import styles from './style.module.css';
import Link from 'next/link';
import logo from '@/../public/assets/logo.svg';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href='/' style={{textDecoration: 'None'}}>
                        <div className={styles.logoContent}>
                            <Image className={styles.logo} alt='logo easypay bank' src={logo} priority />
                            <p>EasyPay Bank</p>
                        </div>
                    </Link>

                    <div className={styles.navLinks}>
                        <div className={styles.navOptions}>
                            <Link href='/about' className={styles.link}>The Bank</Link>
                            <Link href='/explore' className={styles.link}>For you</Link>
                            <Link href='/blog' className={styles.link}>Blog</Link>
                        </div>

                        <div className={styles.navButtons}>
                            <button className={styles.createButton}>Create Account</button>
                            <button className={styles.loginButton}>Access</button>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    )
}
