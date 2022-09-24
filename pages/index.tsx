import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

const getRandomMove = () => {
  const randomValue = Math.floor(Math.random() * 3);
  if (randomValue === 0) return "paper";
  if (randomValue === 1) return "scissors";
  if (randomValue === 2) return "rock";
};

const Home: NextPage = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [move, setMove] = React.useState<"paper" | "scissors" | "rock">();
  const [computerMove, setComputerMove] = React.useState<
    "paper" | "scissors" | "rock"
  >();
  const [isGameOver, setIsGameOver] = React.useState(false);
  const animationTime = 1500;

  useEffect(() => {
    if (move) {
      setComputerMove(getRandomMove());
      setTimeout(() => setIsGameOver(true), animationTime);
    } else {
      setComputerMove(undefined);
    }
  }, [move]);


  const gameStatus = (): "win" | "draw" | "lose" => {
    if (move === computerMove) return "draw";
    else if (move === "paper" && computerMove === "rock") return "win";
    else if (move === "paper" && computerMove === "scissors") return "lose";
    else if (move === "rock" && computerMove === "scissors") return "win";
    else if (move === "rock" && computerMove === "paper") return "lose";
    else if (move === "scissors" && computerMove === "paper") return "win";
    else if (move === "scissors" && computerMove === "rock") return "lose";
    else return "draw";
  };

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
        } ${isGameOver ? styles.gameOver : ""}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {isPlaying && move !== undefined && computerMove !== undefined ? (
          <>
            <div key={move}>
              <h3 className={styles.choiceTitle}>You Picked</h3>
              <Button item={move} />
            </div>
            {isGameOver && (
              <>
                <h3 className={styles.choiceTitle}>You {gameStatus()}!</h3>
              </>
            )}
            <div>
              <h3 className={styles.choiceTitle}>The House Picked</h3>
              <motion.div
                key={computerMove}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: animationTime/1000 }}
              >
                <Button item={computerMove} />
              </motion.div>
            </div>
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
              span={true}
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
