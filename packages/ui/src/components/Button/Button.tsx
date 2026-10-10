import clsx from "clsx";
import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components/Button";
import styles from "./Button.module.css";

interface ButtonProps extends Omit<RACButtonProps, "className"> {
  className?: string;
  colorStyle?: "neutral" | "primary" | "secondary";
  variant?: "solid" | "outline" | "text";
  size?: "small" | "medium" | "large";
  loading?: boolean;
}

export const Button = ({
  children = "Botón",
  className,
  colorStyle = "primary",
  variant = "solid",
  size = "medium",
  loading = false,
  isDisabled,
  ...props
}: ButtonProps) => {
  return (
    <RACButton
      {...props}
      className={clsx(styles.button, className)}
      data-color-style={colorStyle}
      data-variant={variant}
      data-size={size}
      isDisabled={loading || isDisabled}
      isPending={loading}
    >
      {children}
    </RACButton>
  );
};
