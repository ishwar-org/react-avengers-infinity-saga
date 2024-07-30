import { Button as ButtonMUI } from '@mui/material';
import classNames from 'classnames';
import { ReactNode, MouseEvent, ComponentProps } from 'react';
import styles from './index.module.css';

type MuiProps = Partial<
    Omit<ComponentProps<typeof ButtonMUI>,  "size" | "color" | "variant">
>;

export type ButtonProps = MuiProps &{
    className?: string;
    "data-testid"?: string;
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
    variant?: "text" | "contained" | "outlined";
    shape?: "normal" | "rounded" | "pill";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
    disabled?: boolean;
    children?: ReactNode;
}

const Button = ({
    className,
    "data-testid": dataTestId,
    size="md",
    color="primary",
    variant="outlined",
    shape="normal",
    startIcon,
    endIcon,
    onClick,
    disabled = false,
    children,
    ...rest
}: ButtonProps) => {
    return (
        <ButtonMUI
            {...rest}
            className={classNames(
                styles.buttonMui,
                styles[`button-${size}`],
                styles[`button-${shape}`],
                styles[`button-${variant}`],
                styles[`button-${variant}-${color}`],
                disabled && styles[`button-disabled`],
                className,
            )}
            data-testid={dataTestId}
            startIcon={startIcon}
            endIcon={endIcon}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </ButtonMUI>
    );
};

export default Button;
