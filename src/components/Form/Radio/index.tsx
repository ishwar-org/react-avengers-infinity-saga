import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio as RadioMUI,
    RadioGroup as RadioGroupMUI
} from '@mui/material';
import classNames from 'classnames';
import { ChangeEvent } from 'react';
import styles from './index.module.css';

type RadioOptions = {
    label: string;
    value: string;
    disabled?: boolean;
}

export type RadioProps = {
    className?: string;
    horizontal?: boolean;
    id: string;
    label?: string;
    name: string;
    options: RadioOptions[];
    color?: 'primary' | 'grey' | 'warning';
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    "data-testid"?: string;
}

const Radio = ({
    className,
    horizontal = false,
    id,
    label,
    name,
    options,
    color = 'primary',
    value = '',
    onChange,
    "data-testid": dataTestId
}: RadioProps) => {
    return (
        <FormControl className={styles.radioFormControl}>
            {label && (<FormLabel className={styles.radioLabel} id={id} data-testid={`radio-label-${dataTestId}`}>{label}</FormLabel>)}
            <RadioGroupMUI
                className={classNames(className, styles.radioContainer)}
                data-testid={`radio-group-${dataTestId}`}
                row={horizontal}
                aria-aria-labelledby={id}
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <FormControlLabel
                        className={classNames(styles.radioControlLabel, styles[`radio-control-${color}`])}
                        key={option.label}
                        value={option.value}
                        control={
                            <RadioMUI />
                        }
                        label={option.label}
                        disabled={option.disabled}
                    />
                ))}
            </RadioGroupMUI>
        </FormControl>
    );
};

export default Radio;  

