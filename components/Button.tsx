import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Button.module.css";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  item: "paper" | "rock" | "scissors";
  onClick?: React.MouseEventHandler;
  span?: boolean,
}

const Button: React.FunctionComponent<ButtonProps> = ({
  item,
  onClick,
  span = false,
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
    <motion.div
      className={`${styles.container} ${styles[item]} ${span && styles.span}`}
      whileHover={{
        rotate: 15,
        transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
      }}
      whileTap={{
        rotate: 15,
        transition: { duration: 0.25, repeat: Infinity, repeatType: "reverse" },
      }}
      onClick={onClick}
    >
      <Image src={data[item].icon} width={49 * 1.5} height={59 * 1.5} />
    </motion.div>
  );
};

export default Button;
