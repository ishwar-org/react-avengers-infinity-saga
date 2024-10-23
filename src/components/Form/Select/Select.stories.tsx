import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import Select, { SelectProps, SelectOptions } from '.';

const meta: Meta<SelectProps> = {
    title: 'Components/Form/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SelectProps>;

const StoryContainer: React.FC<SelectProps> = (args) => {
    const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event.target.value);
        setValue(event.target.value);
        if (args.onChange) {
            args.onChange(event);
        }
    };

    return (
        <Select
            {...args}
            value={value}
            onChange={handleChange}
        />
    );
};

export const Default: Story = {
    render: (args) => (
        <StoryContainer
            {...args}
            id={args.id}
            name={args.name}
        />
    ),
    args: {
        id: 'default',
        labelId: 'default-label',
        label: 'Age',
        name: 'age',
        options: [
            { value: '', name: 'None' },
            { value: 18, name: 'Eighteen' },
            { value: 20, name: 'Twenty' },
            { value: 22, name: 'Twenty Two' },
        ],
        displayEmpty: true,
        helperText: 'This is age.',
    },
};
