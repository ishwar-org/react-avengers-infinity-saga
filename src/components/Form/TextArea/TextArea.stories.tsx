import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TextArea, { TextAreaProps } from '.';
import { c } from 'vite/dist/node/types.d-aGj9QkWt';

const meta: Meta<TextAreaProps> = {
    title: 'Components/Form/TextArea',
    component: TextArea,
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
        shape: {
            name: 'shape',
            control: {
                type: 'radio',
                labels: {
                    normal: 'normal',
                    rounded: 'rounded',
                },
            },
            options: ['normal', 'rounded'],
        },
        label: {
            name: 'label',
            control: {
                type: 'radio',
                labels: {
                    '': 'Without Label',
                    label: 'With Label',
                },
            },
            options: ['', 'label'],
            mapping: {
                label: 'Message',
            },
        },
    },
};

export default meta;
type Story = StoryObj<TextAreaProps>;

const StoryContainer = (props: TextAreaProps) => {
    const [message, setMessage] = useState('');
    return (
        <TextArea
            {...props}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
        />
    );
};

export const Default: Story = {
    render: StoryContainer,
    args: {
        variant: 'filled',
        label: 'Subject',
        name: 'subject',
        error: false,
        success: false,
        placeholder: 'Enter your message here...',
    },
};

export const Error: Story = {
    render: StoryContainer,
    args: {
        variant: 'outlined',
        label: 'Subject',
        error: true,
        success: false,
        name: 'subject',
        placeholder: 'Error',
        helperText: 'Error',
    },
};

export const Success: Story = {
    render: StoryContainer,
    args: {
        variant: 'outlined',
        label: 'Subject',
        error: false,
        success: true,
        name: 'subject',
        placeholder: 'Success',
        helperText: 'This is success text',
    },
};
