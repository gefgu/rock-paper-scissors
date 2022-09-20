import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [move, setMove] = React.useState<"paper" | "scissors" | "rock">();

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
        className={`${styles.game} ${
          isPlaying ? styles.playing : styles.starting
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {isPlaying && move !== undefined ? (
          <>
            <Button
              item={move}
              key={move}
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
            />

            <Button
              item={move}
              key={move}
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
            />
          </>
        ) : (
          <>
            <Button
              item={"paper"}
              key={"paper"}
              onClick={() => {
                setMove("paper");
                setIsPlaying(!isPlaying);
              }}
            />
            <Button
              item={"scissors"}
              key={"scissors"}
              onClick={() => {
                setMove("scissors");
                setIsPlaying(!isPlaying);
              }}
            />
            <Button
              item={"rock"}
              key={"rock"}
              onClick={() => {
                setMove("rock");
                setIsPlaying(!isPlaying);
              }}
            />
          </>
        )}
      </motion.main>
    </div>
  );
};

export default Home;
