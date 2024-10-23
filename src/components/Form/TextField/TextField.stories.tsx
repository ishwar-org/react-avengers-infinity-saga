import type { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from '.';

const meta: Meta<TextFieldProps> = {
    title: 'Components/Form/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            name: 'variant',
            control: {
                type: 'radio',
                labels: {
                    outlined: 'outlined',
                    filled: 'filled',
                },
            },
            options: ['outlined', 'filled'],
        },
        size: {
            name: 'size',
            control: {
                type: 'radio',
                labels: {
                    sm: 'Small',
                    md: 'Medium',
                },
            },
            options: ['sm', 'md'],
        },
        shape: {
            name: 'shape',
            control: {
                type: 'radio',
                labels: {
                    normal: 'Normal',
                    rounded: 'Rounded',
                },
            },
            options: ['normal', 'rounded'],
        },
    },
};

export default meta;
type Story = StoryObj<TextFieldProps>;

const StoryContainer = (props: TextFieldProps) => {
    return <TextField {...props} />;
};

export const Outlined: Story = {
    render: StoryContainer,
    args: {
        id: 'default-outlined',
        fullWidth: true,
        labelAsPlacelhoder: 'Username',
        type: 'text',
        name: 'username',
        variant: 'outlined',
        size: 'md',
        placeholder: 'Enter the username',
    },
};

export const Filled: Story = {
    render: StoryContainer,
    args: {
        id: 'default-filled',
        fullWidth: true,
        labelAsPlacelhoder: 'Username',
        type: 'text',
        name: 'username',
        variant: 'filled',
        size: 'md',
        placeholder: 'Enter the username',
    },
};

export const Error: Story = {
    render: StoryContainer,
    args: {
        id: 'default-error',
        labelAsPlacelhoder: 'Username',
        type: 'text',
        name: 'username address',
        variant: 'outlined',
        placeholder: 'Enter the username',
        error: true,
        helperText: 'Error',
    },
};

export const Success: Story = {
    render: StoryContainer,
    args: {
        id: 'default-success',
        labelAsPlacelhoder: 'Username',
        type: 'text',
        name: 'username',
        variant: 'outlined',
        placeholder: 'Enter the username',
        success: true,
    },
};

export const Label: Story = {
    render: StoryContainer,
    args: {
        id: 'default-success',
        label: 'Username',
        type: 'text',
        name: 'username',
        variant: 'outlined',
        placeholder: 'Enter the username',
        fullWidth: true,
    },
};

export const MultiLine: Story = {
    render: StoryContainer,
    args: {
        id: 'default-success',
        label: 'Username',
        type: 'text',
        name: 'username',
        variant: 'outlined',
        placeholder: 'Enter the username',
        fullWidth: true,
        multiline: true,
    },
};
