import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const items: Array<"paper" | "scissors" | "rock"> = [
    "paper",
    "scissors",
    "rock",
  ];

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
      <motion.main
        className={`${styles.game} ${!isPlaying && styles.starting}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <AnimatePresence>
          {items.map((item, index) => {
            if (isPlaying && index >= 2) return "";
            else {
              return (
                <Button
                  item={item}
                  key={item}
                  onClick={() => setIsPlaying(!isPlaying)}
                />
              );
            }
          })}
        </AnimatePresence>
      </motion.main>
    </div>
  );
};

export default Home;
