import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Info from '@/components/Info'

import { GetStaticProps } from 'next';
import TopSection from '@/components/TopSection';

interface HomeProps {
  partners: number,
  clients: number
}

export default function Home({ partners, clients }: HomeProps) {
  return (
    <>
      <Head>
        <title>EasyPay Bank</title>
      </Head>

      <main className={styles.main}>

        <TopSection buttonText='Open your account' mainText='A Super App that simplify your life.' topText='more than a bank' />

        <Info partners={partners} clients={clients} />
      </main>
    </>
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
