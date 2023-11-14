import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Info from '@/components/Info'
import { ThemeProvider } from "styled-components";
import Theme from '@/styles/Theme';

import { GetStaticProps } from 'next';
import TopSection from '@/components/TopSection';
import Adsense from '@/components/Adsense';
import Features from '@/components/Features';

interface HomeProps {
  partners: number,
  clients: number
}

export default function Home({ partners, clients }: HomeProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>EasyPay Bank</title>
      </Head>

      <main className={styles.main}>

        <TopSection buttonText='Open your account' mainText='A Super App that simplify your life.' topText='more than a bank' />

        <Info partners={partners} clients={clients} />

        <Adsense />

        <Features /> 
      </main>
    </ThemeProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  // const commentRef = collection(db, "comments")
  // const commentSnapshot = await getDocs(commentRef)

  // const postRef = collection(db, "tarefas")
  // const postSnapshot = await getDocs(postRef)

  return {
    props: {
      partners: 5,
      clients: 4
    },
    revalidate: 60, //revalidada a cada 60 segundos, poupando requisições
  }
}
