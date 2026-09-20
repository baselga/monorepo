import { cva } from "class-variance-authority";
import styles from "./Button.module.css";

const buttonVariants = cva(styles.button);

export const Button = () => {
  return <button className={buttonVariants()}>Botón</button>;
};
