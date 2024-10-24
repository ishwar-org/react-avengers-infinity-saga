import type { Meta, StoryObj } from '@storybook/react';
import PasswordField, { PasswordFieldProps, PASSWORD_REQUIREMENT_KEYS } from '.';

const meta: Meta<PasswordFieldProps> = {
    title: "Components/Form/Password",
    component: PasswordField,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            name: "variant",
            control: {
                type: "radio",
                labels: {
                    outlined: "outlined",
                    filled: "filled",
                },
            },
            options: ["outlined", "filled"],
        },
        shape: {
            name: "shape",
            control: {
                type: "radio",
                labels: {
                    normal: "normal",
                    rounded: "rounded",
                },
            },
            options: ["normal", "rounded"],
        },
        passwordLength: {
            name: "passwordLength",
            control: {
                type: "radio",
                labels: {
                    8: "Minimum 8",
                    10: "Minimum 10",
                    12: "Minimum 12",
                },
            },
            options: [8, 10, 12],
        },
    },
};

export default meta;
type Story = StoryObj<PasswordFieldProps>;

const StoryContainer = (props: PasswordFieldProps) => {
    return (
        <div style={{ maxWidth: 480 }}>
            <PasswordField
                {...props}
                fullWidth={true}
            />
        </div>
    );
};

const commonProps = {
    passwordRequirementLabels: {
        [PASSWORD_REQUIREMENT_KEYS.MINIMUM_8_CHARACTERS]:
            "8 characters minimum",
        [PASSWORD_REQUIREMENT_KEYS.MINIMUM_10_CHARACTERS]:
            "10 characters minimum",
        [PASSWORD_REQUIREMENT_KEYS.MINIMUM_12_CHARACTERS]:
            "12 characters minimum",
        [PASSWORD_REQUIREMENT_KEYS.ONE_UPPERCASE_CHARACTER]:
            "ONE UPPERCASE CHARACTER",
        [PASSWORD_REQUIREMENT_KEYS.ONE_LOWERCASE_CHARACTER]:
            "one lowercase character",
        [PASSWORD_REQUIREMENT_KEYS.ONE_NUMBER]: "1 number",
        [PASSWORD_REQUIREMENT_KEYS.ONE_SPECIAL_CHARACTER]:
            "one $pecial character",
    },
};

export const Default: Story = {
    render: StoryContainer,
    args: {
        id: "default",
        label: "Password",
        type: "password",
        name: "password",
        variant: "outlined",
        placeholder: "Enter the password",
        shape: "normal",
        enablePreview: false,
    },
};

export const WithReqiurementLabels: Story = {
    render: StoryContainer,
    args: {
        id: 'default',
        label: 'Password',
        type: 'password',
        name: 'password',
        variant: 'outlined',
        placeholder: 'Enter the password',
        enablePreview: true,
        showPasswordRequirements: true,
        ...commonProps,
    },
};

export const WithPasswordLength: Story = {
  render: StoryContainer,
  args: {
    id: "default",
    label: "Password",
    type: 'password',
    name: "password",
    variant:"outlined",
    placeholder: "Enter the password",
    shape: 'rounded',
    enablePreview: true,
    showPasswordRequirements: true,
    passwordLength: 10,
    ...commonProps
  }
}