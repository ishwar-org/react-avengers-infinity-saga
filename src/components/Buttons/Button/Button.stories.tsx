import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '.';
import { ArrowLeft, ArrowRight } from '../../Icons';

const meta: Meta<ButtonProps> = {
    title: 'Components/Buttons/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            name: 'variant',
            control: {
                type: 'radio',
                labels: {
                    text: 'Text',
                    contained: 'Contained',
                    outlined: 'Outlined',
                },
            },
            options: ['text', 'contained', 'outlined'],
        },
        size: {
            name: 'size',
            control: {
                type: 'radio',
                labels: {
                    sm: 'Small',
                    md: 'Medium',
                    lg: 'Large',
                    xl: 'Extra Large',
                },
            },
            options: ['sm', 'md', 'lg', 'xl'],
        },
        color: {
            name: 'color',
            control: {
                type: 'radio',
                labels: {
                    primary: 'Primary',
                    secondary: 'Secondary',
                    success: 'Success',
                    error: 'Error',
                    info: 'Info',
                    warning: 'Warning',
                },
            },
            options: [
                'primary',
                'secondary',
                'success',
                'error',
                'info',
                'warning',
            ],
        },
        shape: {
            name: 'shape',
            control: {
                type: 'radio',
                labels: {
                    mormal: 'Normal',
                    rounded: 'Rounded',
                    pill: 'Pill',
                },
            },
            options: ['normal', 'rounded', 'pill'],
        },
        startIcon: {
            name: 'startIcon',
            control: {
                type: 'radio',
                labels: {
                    '': 'Without',
                    icon: 'With',
                },
            },
            options: ['', 'icon'],
            mapping: {
                icon: <ArrowLeft />,
            },
        },
        endIcon: {
            name: 'endIcon',
            control: {
                type: 'radio',
                labels: {
                    '': 'Without',
                    icon: 'With',
                },
            },
            options: ['', 'icon'],
            mapping: {
                icon: <ArrowRight />,
            },
        },
    },
};

export default meta;
type Story = StoryObj<ButtonProps>;

const StoryContainer = (props: ButtonProps) => {
  return (
    <Button
      {...props}
    />
  );
};

export const Default: Story = {
  render: StoryContainer,
  args: {
    size:"sm",
    color: "primary",
    variant: "contained",
    shape: "normal",
    children: "Click me",
    disabled: false,
  }
};