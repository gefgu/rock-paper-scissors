import Image from "next/image";
import styles from "../styles/Button.module.css";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  item: "paper" | "rock" | "scissors";
  onClick?: React.MouseEventHandler;
  span?: boolean;
  big?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  item,
  onClick,
  span = false,
  big = false,
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
      className={`${styles.container} ${styles[item]} ${span && styles.span} ${
        big && styles.big
      }`}
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
      {big ? (
        <Image src={data[item].icon} width={49 * 2} height={59 * 2} />
      ) : (
        <Image src={data[item].icon} width={49 * 1.5} height={59 * 1.5} />
      )}
    </motion.div>
  );
};

export default Button;
