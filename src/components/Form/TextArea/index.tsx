import { InputAdornment, TextareaAutosize as BaseTextareaAutosize } from "@mui/material";
import classNames from "classnames";
import {
    ChangeEventHandler,
    FocusEventHandler,
    ReactNode,
    forwardRef
} from 'react';
import { AlertCircle, Check } from "../../Icons";
import styles from './index.module.css';

interface FieldBaseProps {
    error?: boolean;
    success?: boolean;
    helperText?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FieldRef = any;

export interface TextAreaProps extends FieldBaseProps {
    className?: string;
    label?: string | ReactNode;
    name: string;
    placeholder: string;
    value: string | number;
    defaultValue: string;
    minRows?: number;
    maxRows?: number;
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    variant?: "outlined" | "filled";
    shape?: "normal" | "rounded";
    required?: boolean;
    disabled?: boolean;
    hideErrorIcon?: boolean;
    minLength?: number;
    "aria-label"?: string;
    "data-testid"?: string;
}

const TextArea = (
    {
        className,
        label = "",
        name,
        placeholder,
        value,
        defaultValue,
        onChange,
        onBlur,
        variant = "filled",
        shape = "normal",
        required = false,
        error,
        success = false,
        disabled = false,
        helperText,
        hideErrorIcon = false,
        "aria-label": ariaLabel,
        "data-testid": dataTestId
    }: TextAreaProps,
    ref: FieldRef
) => {
    return (
        <div className={styles[`main-textarea-container`]}>
            {label && (
                <label className={classNames(styles['textarea-label'], error && styles.textareaLabelError)} data-testid={`${dataTestId}-label`}>{label}</label>
            )}
            <BaseTextareaAutosize
                className={classNames(
                    className,
                    styles.textareaAutoSize,
                    styles[`textarea-autosize-${variant}`],
                    styles[`textarea-autosize-${shape}`],
                    error && styles[`textarea-autosize-error`]
                )}
                name={name}
                placeholder={placeholder}
                data-testid={`${dataTestId}-textarea`}
                ref={ref}
                value={value}
                defaultValue={defaultValue}
                aria-label={ariaLabel}
                required={required}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
            />
            { error && !hideErrorIcon && (
                <InputAdornment position="end" className={classNames(styles.textareaAutoSizeIcon, styles[`textarea-error-icon`])}>
                    <AlertCircle className={styles.errorIcon} />
                </InputAdornment>
            )}
            { success && (
                <InputAdornment position="end" className={classNames(styles.textareaAutoSizeIcon, styles[`textarea-success-icon`])}>
                    <Check className={styles.successIcon} />
                </InputAdornment>
            )}
            {helperText && (
                <span>{helperText}</span>
            )}
        </div>
    );
};

export default forwardRef<FieldRef, TextAreaProps>(TextArea);
