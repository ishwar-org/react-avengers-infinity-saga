import { Alert as AlertMUI, AlertTitle } from '@mui/material';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Info } from '../Icons';
import styles from './index.module.css';

export type AlertProps = {
    className?: string;
    "data-testid"?: string;
    color?: "info" | "success" | "error" | "warning";
    variant?: "standard" | "filled" | "outlined";
    withRound?: boolean;
    icon?: ReactNode | boolean;
    size?: "sm" | "md",
    title?: ReactNode;
    description: ReactNode;
    action?: ReactNode
    onClose?: () => void;
}

const Alert = ({
    className,
    "data-testid": dataTestId,
    color = "success",
    variant = "standard",
    withRound = true,
    icon,
    size = "sm",
    title = "",
    description = "",
    onClose,
    ...rest
}: AlertProps) => {
    const colorWithIcon = {
        success: <CheckCircle />,
        info: <Info />,
        error: <AlertCircle />,
        warning: <AlertTriangle />
    };

    const iconRender = (key: string): JSX.Element => {
        return colorWithIcon[key as keyof typeof colorWithIcon];
    };

    return (
        <AlertMUI
            data-testid={dataTestId}
            className={classNames(
                styles.alertMui,
                styles[`alert-${size}`],
                styles[`alert-${variant}`],
                styles[`alert-${variant}-${color}`],
                (withRound && !title) && styles[`alert-rounded`],
                className
            )}
            icon={icon ?? iconRender(color)}
            onClose={onClose}
            {...rest}
        >
            { title && (
                <AlertTitle>{title}</AlertTitle>
            )}
            {description}
        </AlertMUI>
    );
};

export default Alert;
