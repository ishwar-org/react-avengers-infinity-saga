import type { Meta, StoryObj } from '@storybook/react';
import TextArea, { TextAreaProps } from '.';

const meta: Meta<TextAreaProps> = {
  title: "Components/Form/TextArea",
  component: TextArea,
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
          rounded: "rounded"
        },
      },
      options: ["normal", "rounded"],
    },
    label: {
      name: "label",
      control: {
        type: "radio",
        labels: {
          "": "Without Label",
          label: "With Label"
        },
      },
      options: ["", "label"],
      mapping: {
        label: "Message",
      },
    },
  }
};

export default meta;
type Story = StoryObj<TextAreaProps>;


const StoryContainer = (props: TextAreaProps) => {
    return (
      <TextArea
        {...props}
      />
    );
};

export const Default: Story = {
  render: StoryContainer,
  args: {
    variant: "filled",
    shape: "rounded",
    label: "Subject",
    name: 'subject',
    value: 'Welcome to reactjs',
    defaultValue: '',
    error: false,
    success: false,
    placeholder: "Enter your message here..."
  },
}

export const Error: Story = {
  render: StoryContainer,
  args: {
    variant: "outlined",
    shape: "rounded",
    label: "Subject", 
    error: true,
    success: false,
    name: 'subject',
    value: '',
    defaultValue: '',
    placeholder: "Error"
  }
}

export const Success: Story = {
  render: StoryContainer,
  args: {
    variant: "outlined",
    shape: "rounded",
    label: "Subject", 
    error: false,
    success: true,
    name: 'subject',
    value: 'Welcome to reactjs',
    defaultValue: '',
    placeholder: "Error"
  }
}
