import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '.';
import { ArrowLeft, ArrowRight } from '../../Icons';

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const StoryContainer = (props: ButtonProps) => {
  return (
    <Button
      {...props}
    />
  );
};

const storiesArgTypes = {
  argTypes: {
    variant: {
      name: "variant",
      control: {
        type: "radio",
        labels: {
          text: "Text",
          contained: "Contained",
          outlined: "Outlined"
        },
      },
      options: ["text", "contained", "outlined"],
    },
    size: {
      name: "size",
      control: {
        type: "radio",
        labels: {
          sm: "Small",
          md: "Medium",
          lg: "Large"
        },
      },
      options: ["sm", "md", "lg"],
    },
    color: {
      name: "color",
      control: {
        type: "radio",
        labels: {
          primary: "Primary",
          secondary: "Secondary",
          success: "Success",
          error: "Error",
          info: "Info",
          warning: "Warning"
        }
      },
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    shape: {
      name: "shape",
      control: {
        type: "radio",
        labels: {
          mormal: "Normal",
          rounded: "Rounded",
          pill: "Pill",
        }
      },
      options: ["normal", "rounded", "pill"],
    },
    startIcon: {
      name: "startIcon",
      control: {
        type: "radio",
        labels: {
          "": "Without",
          icon: "With"
        }
      },
      options: ["", "icon"],
      mapping: {
        icon: <ArrowLeft />
      }
    },
    endIcon: {
      name: "endIcon",
      control: {
        type: "radio",
        labels: {
          "": "Without",
          icon: "With"
        }
      },
      options: ["", "icon"],
      mapping: {
        icon: <ArrowRight />
      }
    }
  }
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
  },
  ...storiesArgTypes
};