import {
    FormControl,
    FormHelperText,
    Select as MuiSelect,
    SelectChangeEvent,
    MenuItem,
    InputLabel,
} from '@mui/material';
import { FC, ReactNode } from 'react';

export type SelectOptions = {
    value: string | number;
    name: string;
};

export interface SelectProps {
    label?: ReactNode;
    id: string;
    labelId: string;
    name: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    options: SelectOptions[];
    fullWidth?: boolean;
    helperText?: ReactNode;
    displayEmpty?: boolean;
}

const Select: FC<SelectProps> = ({
    label,
    id,
    labelId,
    name,
    value,
    onChange,
    options,
    fullWidth = false,
    helperText = '',
    displayEmpty = false,
}) => {
    return (
        <FormControl fullWidth={fullWidth}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <MuiSelect
                labelId={labelId}
                id={id}
                name={name}
                value={value}
                label={label}
                displayEmpty={displayEmpty}
                onChange={onChange}
            >
                {options.map(({ value, name }) => (
                    <MenuItem
                        key={value}
                        value={value}
                    >
                        {name}
                    </MenuItem>
                ))}
            </MuiSelect>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

export default Select;
