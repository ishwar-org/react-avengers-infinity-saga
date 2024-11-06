import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import {
  InputHTMLAttributes,
  ChangeEvent,
  ReactNode,
  ReactElement,
} from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export interface CheckboxProps {
  className?: string;
  checked: boolean;
  id: string;
  name: string;
  label?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  required?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  color: "primary" | "secondary" | "info" | "success";
  "data-testid"?: string;
}

type InputCheckboxProps = Omit<CheckboxProps, "label">;

type CheckboxLabelProps = Pick<
  CheckboxProps,
  "label" | "size" | "data-testid"
> & {
  children: ReactElement;
};

const InputCheckbox = (props: InputCheckboxProps) => {
  return (
    <MuiCheckbox
      {...props}
      className={classNames(styles[`checkbox-variant-${props.color}`])}
    />
  );
};

const CheckboxLabel = ({
  children,
  label,
  size,
  "data-testid": dataTestId,
}: CheckboxLabelProps) => {
  return (
    <FormControlLabel
      control={children}
      data-testid={dataTestId}
      label={label}
      className={classNames(
        styles.checkboxLabel,
        size === "small"
          ? styles.checkboxLabelSmall
          : styles.checkboxLabelMedium
      )}
    />
  );
};

const Checkbox = ({
  checked = false,
  id,
  name,
  onChange,
  label,
  inputProps,
  required = false,
  disabled = false,
  size = "medium",
  icon,
  checkedIcon,
  color = "primary",
  "data-testid": dataTestId,
}: CheckboxProps) => {
  const checkboxElement = (
    <InputCheckbox
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      inputProps={inputProps}
      required={required}
      disabled={disabled}
      size={size}
      icon={icon}
      checkedIcon={checkedIcon}
      color={color}
      data-testid={dataTestId}
    />
  );

  if (label) {
    return (
      <CheckboxLabel
        label={label}
        size={size}
        data-testid={`${dataTestId}-label`}
      >
        {checkboxElement}
      </CheckboxLabel>
    );
  }

  return checkboxElement;
};

export default Checkbox;
