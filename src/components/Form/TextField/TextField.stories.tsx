import type { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from '.';

const meta: Meta<TextFieldProps> = {
  title: "Components/Form/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      name: "variant",
      control: {
        type: "radio",
        labels: {
          outlined: "outlined",
          filled: "filled"
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
          pill: "pill"
        },
      },
      options: ["normal", "rounded", "pill"],
    },
  }
};

export default meta;
type Story = StoryObj<TextFieldProps>;

const StoryContainer = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
    />
  );
};

export const Default: Story = {
  render: StoryContainer,
  args: {
    id: "default",
    label: "Username",
    type: 'text',
    name: "username",
    variant:"outlined",
    placeholder: "Enter the username",
    shape: 'normal',
  }
}

export const Error: Story = {
  render: StoryContainer,
  args: {
    id: "default",
    label: "Username",
    type: 'text',
    name: "username",
    variant:"outlined",
    shape: 'normal',
    placeholder: "Enter the username",
    error: true,
    helperText: "Error"
  }
}

export const Success: Story = {
  render: StoryContainer,
  args: {
    id: "default",
    label: "Username",
    type: 'text',
    name: "username",
    variant:"outlined",
    shape: 'rounded',
    placeholder: "Enter the username",
    success: true,
  }
}
