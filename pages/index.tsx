import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="Rock Paper Scissors Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h1>
          <Image src="/logo.svg" width={162} height={99} />
        </h1>
        <div className={styles.scoreBox}>
          <h2 className={styles.scoreTitle}>Score</h2>
          <h3 className={styles.score}>12</h3>
        </div>
      </motion.header>
      <motion.main className={`${styles.game} ${styles.starting}`} initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <Button item="paper" />
        <Button item="scissors" />
        <Button item="rock" />
      </motion.main>
    </div>
  );
};

export default Home;
