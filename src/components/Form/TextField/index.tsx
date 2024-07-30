import { AlertCircle, Check } from '../../Icons';
import {
    FilledInputProps,
    OutlinedInputProps,
    InputAdornment,
    TextFieldProps as MUITextFieldProps,
    TextField as MUITextField,
    TextFieldClasses,
    SxProps,
    Theme,
    InputBaseProps
} from '@mui/material';
import classNames from 'classnames';
import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, ReactNode, forwardRef, Ref } from 'react';
import styles from './index.module.css';

export interface FieldBaseProps {
    error?: boolean;
    success?: boolean;
    helperText?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FieldRef = any;

export interface TextFieldProps extends FieldBaseProps {
    className?: string;
    "data-testid"?: string;
    label: ReactNode;
    id?: string;
    name: string;
    type: string;
    placeholder: string;
    value?: string | number;
    required?: boolean;
    disabled?: boolean;
    variant?: "outlined" | "filled";
    shape?: "normal" | "rounded" | "pill";
    customClasses?: Partial<TextFieldClasses>;
    sx?: SxProps<Theme>;
    fullWidth?: boolean;
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyUp?: KeyboardEventHandler<HTMLDivElement>;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
    startAdornment?: string | ReactNode;
    endAdornment?: string | ReactNode;
    inputProps?: InputBaseProps['inputProps'];
    InputProps?: FilledInputProps | OutlinedInputProps;
    inputLabelProps?: MUITextFieldProps['InputLabelProps'];
    inputRef?: Ref<HTMLElement>;
    hideErrorIcon?: boolean;
    hideSuccessIcon?: boolean;
    browserAutocompleteOff?: boolean;
}

const TextField = forwardRef<FieldRef, TextFieldProps>((props: TextFieldProps, ref: FieldRef) => {
    const {
        className,
        "data-testid": dataTestId,
        id,
        name,
        placeholder,
        type = "text",
        label,
        value,
        disabled,
        required,
        customClasses,
        fullWidth,
        onBlur,
        onFocus,
        onChange,
        onKeyUp,
        onKeyDown,
        startAdornment,
        endAdornment,
        InputProps,
        inputProps,
        inputLabelProps,
        inputRef,
        variant = "outlined",
        shape = "normal",
        helperText,
        sx,
        error = false,
        success = false,
        hideErrorIcon = false,
        hideSuccessIcon = false,
        browserAutocompleteOff
    } = props;
    
    const adornments = {
        start: (
            <>
                {startAdornment && (
                    <InputAdornment position='start' className={styles['textfield-startadornment']}>
                        {startAdornment}
                    </InputAdornment>
                )}
            </>
        ),
        end: (
            <>
                {endAdornment && (
                    <InputAdornment position='end' className={styles['textfield-endadornment']}>
                        {endAdornment}
                    </InputAdornment>
                )}
                {error && !hideErrorIcon && (
                    <InputAdornment position='end' className={styles['textfield-error-endadornment']}>
                        <AlertCircle />
                    </InputAdornment>
                )}
                {success && !hideSuccessIcon && (
                    <InputAdornment position='end' className={styles['textfield-success-endadornment']}>
                        <Check />
                    </InputAdornment>
                )}
            </>
        )
    };

    const inputPropsWithAdornments = {
        autoComplete: browserAutocompleteOff ? "cc-no-autofill" : undefined,
        ...(variant === "filled" && { disableUnderline: true }),
        ...InputProps,
        ...(startAdornment && {startAdornment: adornments.start}),
        endAdornment: adornments.end
    };

    return (
        <MUITextField
            data-testid={dataTestId}
            className={classNames(
                className,
                styles[`common-textfield`],
                styles[`textfield-${shape}`],
                !error && styles['textfield-success'],
                error && styles['textfield-error'],
            )}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            label={label}
            required={required}
            disabled={disabled}
            error={error}
            variant={variant}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            InputProps={inputPropsWithAdornments}
            inputProps={inputProps}
            InputLabelProps={inputLabelProps}
            inputRef={inputRef}
            fullWidth={fullWidth}
            classes={customClasses}
            helperText={helperText}
            sx={sx}
            ref={ref}
        />
    );
});

export default TextField;
