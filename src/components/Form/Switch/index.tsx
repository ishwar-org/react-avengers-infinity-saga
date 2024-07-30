import { Switch as SwitchMUI, FormControlLabel } from '@mui/material';
import classNames from 'classnames';
import { ChangeEvent, ReactNode, ComponentProps } from 'react';
import styles from './index.module.css';

type SwitchMuiProps = Partial<Omit<ComponentProps<typeof SwitchMUI>, "color" | "size">>;

type SwitchInputProps = {
    'aria-label'?: string;
}

export type SwitchProps = SwitchMuiProps & {
    className?: string;
    id: string;
    name: string;
    checked: boolean;
    disableRipple: boolean;
    color: 'primary' | 'secondary' | 'success' | 'warning';
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    label?: ReactNode;
    icon?: ReactNode;
    checkedIcon?: ReactNode;
    inputProps?: SwitchInputProps;
    "data-testid"?: string;
}

const Switch = ({
    className,
    id,
    name,
    checked = false,
    disableRipple = true,
    color = 'primary',
    onChange,
    required = false,
    disabled = false,
    label = '',
    inputProps,
    "data-testid": dataTestId
}: SwitchProps) => {
    const commonSwitchProps = {
        id,
        name,
        checked,
        disableRipple,
        onChange,
        inputProps,
        "data-testid": dataTestId
    };

    if (label) {
        return (
            <FormControlLabel
                control={
                    <SwitchMUI
                        {...commonSwitchProps}
                        className={classNames(
                            styles.switchContainer,
                            styles[`switch-bg-${color}`],
                            className
                        )}
                    />
                }
                className={styles.switchControlLabel}
                required={required}
                disabled={disabled}
                data-testid={`form-control-${dataTestId}`}
                label={label}
            />
        );
    }

    return (
        <SwitchMUI
            {...commonSwitchProps}
            className={classNames(
                styles.switchContainer,
                styles[`switch-bg-${color}`],
                className
            )}
            required={required}
            disabled={disabled}
        />
    );
};

export default Switch;
