import React, { ChangeEvent, useMemo, useState } from "react";
import { Grid } from "@mui/material";
import { TextField } from "..";
import { FiCheck, FiCircle, FiEye, FiEyeOff } from "../../Icons";
import {
  PASSWORD_LENGTH,
  PASSWORD_REQUIREMENT_KEYS,
  PASSWORD_REQUIREMENTS,
  RequirementsConfig,
  PasswordRequirementProps,
  PasswordFieldProps,
} from "../../../types";
import classNames from "classnames";
import styles from "./index.module.css";

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({
  completed,
  label,
  index,
  error,
}) => {
  return (
    <Grid
      data-testid="password-requirement"
      className={classNames(styles.passwordField__requirements, {
        [styles.passwordField__requirementCompleted]: completed,
        [styles.passwordField__requirementError]: !completed && error,
      })}
      item
      xs={4}
      justifyContent={(index + 1) % 3 === 0 ? "flex-end" : "flex-start"}
    >
      {completed ? (
        <FiCheck
          className={styles.passwordField__check}
          data-testid="check-password"
        />
      ) : (
        <FiCircle
          className={styles.passwordField__circle}
          data-testid="cirle-password"
        />
      )}
      <p>{label}</p>
    </Grid>
  );
};

const PasswordField = ({
  disabled,
  passwordValue,
  enablePreview = true,
  passwordLength = PASSWORD_LENGTH.MIN_12,
  passwordRequirementLabels,
  showPasswordRequirements,
  onChange,
  onKeyDown,
  error,
  helperText,
  ...props
}: PasswordFieldProps) => {
  const [password, setPassword] = useState<string>(passwordValue ?? "");
  const [showPassword, setShowPassword] = useState(false);
  const passwordIconClass = classNames(!disabled && styles.showPasswordIcon);
  const EyeIcon = showPassword ? FiEyeOff : FiEye;
  const fieldType = showPassword ? "text" : "password";

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
    onChange?.(event);
  };

  const toggleShowPassword = () => {
    if (!disabled) {
      setShowPassword((prevPassword) => !prevPassword);
    }
  };

  const adornments = {
    end: enablePreview && password && (
      <EyeIcon onClick={toggleShowPassword} className={passwordIconClass} />
    ),
  };

  const passwordRequirements = useMemo(() => {
    if (showPasswordRequirements) {
      return Object.entries(
        PASSWORD_REQUIREMENTS(passwordLength)
      ).reduce<RequirementsConfig>((result, [key, { validator }]) => {
        result[key as PASSWORD_REQUIREMENT_KEYS] = {
          label:
            passwordRequirementLabels?.[key as PASSWORD_REQUIREMENT_KEYS] || "",
          validator,
        };
        return result;
      }, {} as RequirementsConfig);
    }
    return {} as RequirementsConfig;
  }, [showPasswordRequirements, passwordRequirementLabels, passwordLength]);

  return (
    <>
      <TextField
        {...props}
        disabled={disabled}
        type={fieldType}
        onChange={onPasswordChange}
        endAdornment={adornments.end}
        onKeyDown={onKeyDown}
        error={error}
        helperText={helperText}
      />
      {showPasswordRequirements && (
        <Grid container className={styles.passwordField__requirementsWrapper}>
          {Object.entries(passwordRequirements)?.map(([key, props], index) => (
            <PasswordRequirement
              key={key}
              label={props.label}
              completed={props.validator(password)}
              error={error}
              index={index}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default PasswordField;
