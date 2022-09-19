import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="Rock Paper Scissors Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image src="/logo.svg" width={162} height={99} />
      </header>
    </div>
  );
};

export default Home;
