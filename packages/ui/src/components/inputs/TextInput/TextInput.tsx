import clsx from "clsx";
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
}

export const TextInput = ({
  className,
  disabled,
  size = "medium",
  variant = "solid",
  ...props
}: TextInputProps) => (
  <RACInput
    {...props}
    className={clsx(styles.input, className)}
    data-disabled={disabled || undefined}
    data-size={size}
    data-variant={variant}
    disabled={disabled}
    type="text"
  />
);
