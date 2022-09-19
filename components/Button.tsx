import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Button.module.css";
import React from "react";

interface ButtonProps {
  item: "paper" | "rock" | "scissors";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  item,
}: ButtonProps) => {
  const data = {
    paper: {
      icon: "/icon-paper.svg",
    },
    rock: {
      icon: "/icon-rock.svg",
    },
    scissors: {
      icon: "/icon-scissors.svg",
    },
  };

  return (
    <div className={styles.container}>
      <Image src={data[item].icon} width={49} height={59} />
    </div>
  );
};

export default Button;
