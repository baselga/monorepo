import clsx from "clsx";
import { type ReactNode, useRef } from "react";
import {
  Button as RACButton,
  type SelectProps as RACSelectProps,
  Select as RACSelect,
  SelectValue,
} from "react-aria-components/Select";
import {
  ListBox,
  ListBoxItem,
  type ListBoxItemProps as RACListBoxItemProps,
} from "react-aria-components/ListBox";
import { Popover } from "react-aria-components/Popover";
import styles from "./SelectInput.module.css";
import { ChevronDown, LoaderCircle } from "lucide-react";

export interface SelectInputProps<T extends object> extends Omit<
  RACSelectProps<T>,
  "className"
> {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "solid" | "underline";
  loading?: boolean;
  children: ReactNode;
}

export interface SelectInputOptionProps<T extends object> extends Omit<
  RACListBoxItemProps<T>,
  "className"
> {
  children: ReactNode;
}

const SelectInputOption = <T extends object>({
  children,
  isDisabled,
  ...props
}: SelectInputOptionProps<T>) => {
  return (
    <ListBoxItem
      {...props}
      className={styles.option}
      data-disabled={isDisabled || undefined}
      isDisabled={isDisabled}
    >
      {children}
    </ListBoxItem>
  );
};

const SelectInputRoot = <T extends object>({
  children,
  className,
  isDisabled,
  loading = false,
  onOpenChange,
  size = "medium",
  variant = "solid",
  ...props
}: SelectInputProps<T>) => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div aria-busy={loading || undefined}>
      <RACSelect
        {...props}
        className={clsx(styles.select, className)}
        data-loading={loading || undefined}
        data-size={size}
        data-variant={variant}
        isDisabled={loading || isDisabled}
        onOpenChange={(isOpen) => {
          onOpenChange?.(isOpen);

          if (!isOpen) {
            queueMicrotask(() => triggerRef.current?.focus());
          }
        }}
      >
        <RACButton
          className={styles.trigger}
          data-loading={loading || undefined}
          data-size={size}
          data-variant={variant}
          ref={triggerRef}
        >
          <SelectValue className={styles.value} />
          {loading ? (
            <LoaderCircle
              aria-hidden="true"
              className={styles.loadingIndicator}
            />
          ) : (
            <ChevronDown aria-hidden="true" className={styles.indicator} />
          )}
        </RACButton>
        <Popover className={styles.popover}>
          <ListBox className={styles.listBox}>{children}</ListBox>
        </Popover>
      </RACSelect>
    </div>
  );
};

export const SelectInput = Object.assign(SelectInputRoot, {
  Option: SelectInputOption,
});
