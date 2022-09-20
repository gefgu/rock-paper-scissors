import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Button.module.css";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  item: "paper" | "rock" | "scissors";
  onClick?: React.MouseEventHandler;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  item,
  onClick,
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
      className={`${styles.container} ${styles[item]}`}
      whileHover={{
        rotate: 15,
        transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
      }}
      whileTap={{
        rotate: 15,
        transition: { duration: 0.25, repeat: Infinity, repeatType: "reverse" },
      }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      <Image src={data[item].icon} width={49 * 1.5} height={59 * 1.5} />
    </motion.div>
  );
};

export default Button;
