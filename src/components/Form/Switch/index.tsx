import { Switch as SwitchMUI, FormControlLabel } from '@mui/material';
import classNames from 'classnames';
import { ChangeEvent, FC, ReactNode, ComponentProps } from 'react';
import styles from './index.module.css';

type SwitchMuiProps = Partial<
    Omit<ComponentProps<typeof SwitchMUI>, 'color' | 'size'>
>;

type SwitchInputProps = {
    'aria-label'?: string;
};

export interface SwitchProps extends SwitchMuiProps {
    className?: string;
    id: string;
    name: string;
    checked: boolean;
    disableRipple?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning';
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    label?: ReactNode;
    icon?: ReactNode | null;
    checkedIcon?: ReactNode | null;
    inputProps?: SwitchInputProps;
    'data-testid'?: string;
}

const Switch: FC<SwitchProps> = ({
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
    icon,
    checkedIcon,
    'data-testid': dataTestId,
}) => {
    const commonSwitchProps = {
        id,
        name,
        checked,
        disableRipple,
        ...(icon &&
            checkedIcon && {
                icon,
                checkedIcon,
            }),
        onChange,
        inputProps,
        'data-testid': dataTestId,
    };

    console.log(!!(icon && checkedIcon));

    if (label) {
        return (
            <FormControlLabel
                control={
                    <SwitchMUI
                        {...commonSwitchProps}
                        className={classNames(
                            styles.switchContainer,
                            !!(icon && checkedIcon) && styles[`switch-icon`],
                            styles[`switch-bg-${color}`],
                            className,
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
                !!(icon && checkedIcon) && styles[`switch-icon`],
                className,
            )}
            required={required}
            disabled={disabled}
        />
    );
};

export default Switch;
