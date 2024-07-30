import { ChangeEvent, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { TextField, TextFieldProps } from '..';
import { Check, Circle, Eye, EyeOff } from '../../Icons';
import classNames from 'classnames';
import styles from './index.module.css';

export enum PASSWORD_LENGTH {
    MIN_8 = 8,
    MIN_10 = 10,
    MIN_12 = 12,
}

export enum PASSWORD_REQUIREMENT_KEYS {
    MINIMUM_8_CHARACTERS = 'minimum_8_characters',
    MINIMUM_10_CHARACTERS = 'minimum_10_characters',
    MINIMUM_12_CHARACTERS = 'minimum_12_characters',
    ONE_UPPERCASE_CHARACTER = 'one_uppercase_character',
    ONE_LOWERCASE_CHARACTER = 'one_lowercase_character',
    ONE_NUMBER = 'one_number',
    ONE_SPECIAL_CHARACTER = 'one_special_character'
}

type FieldValidator = {
    label: string;
    validator: (password: string) => boolean;
}

type RequirementsConfig = Record<PASSWORD_REQUIREMENT_KEYS, FieldValidator>;

type PasswordRequirementProps = {
    completed: boolean;
    label: string;
    index: number;
    error?: boolean;
}

export interface PasswordFieldProps extends TextFieldProps {
    enablePreview?: boolean;
    passwordValue?: string;
    passwordLength?: number;
    passwordRequirementLabels?: {
        [key in PASSWORD_REQUIREMENT_KEYS]: string;
    };
    showPasswordRequirements?: boolean;
}

export const PASSWORD_REQUIREMENTS = (passwordLength: number) => {
    const requirements = {
        ...(passwordLength === PASSWORD_LENGTH.MIN_8 && {
            [PASSWORD_REQUIREMENT_KEYS.MINIMUM_8_CHARACTERS]: {
                validator: (password: string) => /^.{8,}$/.test(password),
            }
        }),
        ...(passwordLength === PASSWORD_LENGTH.MIN_10 && {
            [PASSWORD_REQUIREMENT_KEYS.MINIMUM_10_CHARACTERS]: {
                validator: (password: string) => /^.{10,}$/.test(password),
            }
        }),
        ...(passwordLength === PASSWORD_LENGTH.MIN_12 && {
            [PASSWORD_REQUIREMENT_KEYS.MINIMUM_12_CHARACTERS]: {
                validator: (password: string) => /^.{12,}$/.test(password),
            }
        }),
        [PASSWORD_REQUIREMENT_KEYS.ONE_UPPERCASE_CHARACTER]: {
            validator: (password: string) => /[A-Z]/.test(password),
        },
        [PASSWORD_REQUIREMENT_KEYS.ONE_LOWERCASE_CHARACTER]: {
            validator: (password: string) => /[a-z]/.test(password),
        },
        [PASSWORD_REQUIREMENT_KEYS.ONE_NUMBER]: {
            validator: (password: string) => /\d/.test(password),
        },
        [PASSWORD_REQUIREMENT_KEYS.ONE_SPECIAL_CHARACTER]: {
            validator: (password: string) => /[^\w\s]/.test(password),
        }
    }
    return requirements;
}

const PasswordRequirement = ({
    completed,
    label,
    index,
    error,
}: PasswordRequirementProps) => {
    return (
        <Grid
            data-testid="password-requirement"
            className={classNames(styles.passwordField__requirements, {
                [styles.passwordField__requirementCompleted]: completed,
                [styles.passwordField__requirementError]: !completed && error
            })}
            item
            xs={4}
            justifyContent={(index + 1) % 3 === 0 ? 'flex-end' : 'flex-start'}
        >
            {completed ? (
                <Check
                    className={styles.passwordField__check}
                    data-testid="check-password"
                />
            ) : (
                <Circle
                    className={styles.passwordField__circle}
                    data-testid="cirle-password"
                />
            )}
            <p>{label}</p>
        </Grid>
    )
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
    ...props
}: PasswordFieldProps) => {
    const [password, setPassword] = useState<string>(passwordValue ?? '');
    const [showPassword, setShowPassword] = useState(false);
    const passwordIconClass = classNames(!disabled && styles.showPasswordIcon);
    const EyeIcon = showPassword ? EyeOff : Eye;
    const fieldType = showPassword ? 'text' : 'password';

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const password =  event.target.value;
        setPassword(password);
        onChange?.(event);
    }

    const toggleShowPassword = () => {
        if (!disabled) {
            setShowPassword((prevPassword) => !prevPassword);
        }
    };

    const adornments = {
        end: enablePreview && password && (
            <EyeIcon
                onClick={toggleShowPassword}
                className={passwordIconClass}
            />
        )
    };

    const passwordRequirements = useMemo(() => {
        if(showPasswordRequirements){
            return Object.entries(
                PASSWORD_REQUIREMENTS(passwordLength)
            ).reduce<RequirementsConfig>((result , [key, { validator }]) => {
                result[key as PASSWORD_REQUIREMENT_KEYS] = {
                    label: 
                        passwordRequirementLabels?.[key as PASSWORD_REQUIREMENT_KEYS] || "",
                    validator,
                };
                return result;
            }, {} as RequirementsConfig);
        }
        return {} as RequirementsConfig;
    }, [showPasswordRequirements, passwordRequirementLabels, passwordLength])
    
    return (
        <>
            <TextField
                {...props}
                disabled={disabled}
                type={fieldType}
                onChange={onPasswordChange}
                endAdornment={adornments.end}
                onKeyDown={onKeyDown}
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
