import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">ZakatCal!</a>
        </h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Rulings of zakat &rarr;</h2>
            <p>Find out the rulings of zakat according to the quran and authentic sunnah</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Virtues of zakat &rarr;</h2>
            <p>Read about the merits and virtues of why zakat is important in islam</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Who can recieve zakat &rarr;</h2>
            <p>Find out about the different categories of people who can recieve zakat</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Resources &rarr;</h2>
            <p>
              Islamic resources
            </p>
          </a>
        </div>
      </main>


      <footer className={styles.footer}>
     
      </footer>
    </div>
  )
}

export default Home
