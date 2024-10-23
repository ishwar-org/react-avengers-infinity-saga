import {
    TextField as MuiTextField,
    InputAdornment,
    InputBaseProps,
    FilledInputProps,
    OutlinedInputProps,
    TextFieldProps as MuiTextFieldProps,
    FormLabel,
} from '@mui/material';
import { AlertCircle, Check } from '../../Icons';
import classNames from 'classnames';
import {
    ReactNode,
    ChangeEventHandler,
    FocusEventHandler,
    KeyboardEventHandler,
    useMemo,
} from 'react';
import styles from './index.module.css';

export interface FieldBaseProps {
    error?: boolean;
    success?: boolean;
    helperText?: ReactNode;
}

export interface TextFieldProps extends FieldBaseProps {
    id: string;
    name: string;
    label?: ReactNode;
    labelAsPlacelhoder?: ReactNode;
    value?: string | number;
    type: string;
    placeholder: string;
    variant?: 'outlined' | 'filled';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'normal' | 'rounded';
    required?: boolean;
    disabled?: boolean;
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
    inputLabelProps?: MuiTextFieldProps['InputLabelProps'];
    hideErrorIcon?: boolean;
    hideSuccessIcon?: boolean;
    multiline?: boolean;
    browserAutocompleteOff?: boolean;
}

const TextField = ({
    id,
    name,
    label,
    labelAsPlacelhoder = '',
    value,
    type,
    placeholder,
    variant = 'outlined',
    shape = 'normal',
    size = 'md',
    required = false,
    disabled = false,
    fullWidth = false,
    error = false,
    success = false,
    helperText = '',
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
    startAdornment,
    endAdornment,
    inputProps,
    InputProps,
    inputLabelProps,
    hideErrorIcon = false,
    hideSuccessIcon = false,
    browserAutocompleteOff,
    multiline = false,
}: TextFieldProps) => {
    const adornments = {
        start: (
            <>
                {startAdornment && (
                    <InputAdornment
                        position='start'
                        className={styles['textfield-startadornment']}
                    >
                        {startAdornment}
                    </InputAdornment>
                )}
            </>
        ),
        end: (
            <>
                {endAdornment && (
                    <InputAdornment
                        position='end'
                        className={styles['textfield-endadornment']}
                    >
                        {endAdornment}
                    </InputAdornment>
                )}
                {error && !hideErrorIcon && (
                    <InputAdornment
                        position='end'
                        className={styles['textfield-error-endadornment']}
                    >
                        <AlertCircle />
                    </InputAdornment>
                )}
                {success && !hideSuccessIcon && (
                    <InputAdornment
                        position='end'
                        className={styles['textfield-success-endadornment']}
                    >
                        <Check />
                    </InputAdornment>
                )}
            </>
        ),
    };

    const inputPropsWithAdornments = {
        autoComplete: browserAutocompleteOff ? 'cc-no-autofill' : undefined,
        ...(variant === 'filled' && { disableUnderline: true }),
        ...InputProps,
        ...(startAdornment && { startAdornment: adornments.start }),
        endAdornment: adornments.end,
    };

    const renderTextField = useMemo(() => {
        return (
            <MuiTextField
                className={classNames(
                    styles[`common-textfield`],
                    styles[`textfield-${variant}`],
                    styles[`textfield-${shape}`],
                    styles[`textfield-${size}`],
                    multiline && styles[`textfield-multline`],
                    success && styles[`textfield-success`],
                )}
                id={id}
                name={name}
                label={labelAsPlacelhoder}
                value={value}
                type={type}
                placeholder={placeholder}
                variant={variant}
                required={required}
                disabled={disabled}
                fullWidth={fullWidth}
                error={error}
                helperText={helperText}
                onBlur={onBlur}
                onChange={onChange}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                multiline={multiline}
                InputProps={inputPropsWithAdornments}
                inputProps={inputProps}
                InputLabelProps={inputLabelProps}
            />
        );
    }, [
        variant,
        shape,
        size,
        success,
        id,
        name,
        labelAsPlacelhoder,
        value,
        type,
        placeholder,
        variant,
        required,
        disabled,
        fullWidth,
        error,
        helperText,
        onBlur,
        onChange,
        onFocus,
        onKeyDown,
        onKeyUp,
        inputPropsWithAdornments,
        inputProps,
        inputLabelProps,
    ]);

    if (label) {
        return (
            <div className={styles[`textfield-label-container`]}>
                <FormLabel>{label}</FormLabel>
                {renderTextField}
            </div>
        );
    }
    return renderTextField;
};

export default TextField;
