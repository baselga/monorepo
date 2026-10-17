import clsx from "clsx";
import type { ReactNode } from "react";
import {
  Input as RACInput,
  type InputProps as RACInputProps,
} from "react-aria-components/Input";
import styles from "./TextInput.module.css";

export interface TextInputProps extends Omit<
  RACInputProps,
  "className" | "size" | "type"
> {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "solid" | "underline";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const TextInput = ({
  className,
  disabled,
  startIcon,
  endIcon,
  size = "medium",
  variant = "solid",
  ...props
}: TextInputProps) => {
  const hasIcons = startIcon || endIcon;
  const input = (
    <RACInput
      {...props}
      className={clsx(styles.input, className)}
      data-disabled={disabled || undefined}
      data-has-icons={hasIcons || undefined}
      data-size={size}
      data-variant={variant}
      disabled={disabled}
      type="text"
    />
  );

  if (!hasIcons) {
    return input;
  }

  return (
    <div
      className={styles.container}
      data-disabled={disabled || undefined}
      data-size={size}
      data-variant={variant}
    >
      {startIcon ? (
        <span aria-hidden="true" className={styles.icon}>
          {startIcon}
        </span>
      ) : null}
      {input}
      {endIcon ? (
        <span aria-hidden="true" className={styles.icon}>
          {endIcon}
        </span>
      ) : null}
    </div>
  );
};
