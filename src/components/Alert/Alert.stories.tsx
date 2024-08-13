import type { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from '.';
import Button from '../Buttons/Button';

const meta: Meta<AlertProps> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      name: "title",
      control: {
        type: "radio",
        labels: {
          "": "Without",
          title: "With"
        }
      },
      options: ["", "title"],
      mapping: {
        title: "Admin",
      },
    },
    size: {
      name: "size",
      control: {
        type: "radio",
        labels: {
          sm: "Small",
          md: "Medium",
        }
      },
      options: ["sm", "md"]
    },
    color: {
      name: "color",
      control: {
        type: "radio",
        labels: {
          success: "Success",
          info: "Info",
          error: "Error",
          warning: "Warning"
        }
      },
      options: ["success", "info", "error", "warning"],
    },
    variant: {
      name: "variant",
      control: {
        type: "radio",
        labels: {
          standard: "Standard",
          filled: "Filled",
          outlined: "Outlined"
        }
      },
      options: ["standard", "filled", "outlined"],
    },
  }
};

export default meta;

type Story = StoryObj<AlertProps>;

const StoryContainer = (props: AlertProps) => {
  return (
    <Alert
      {...props}
    />
  );
};

export const Default: Story = {
  render: StoryContainer,
  args: {
    description: "This role has full access to all products, team management, integrations and security settings.",
    withRound: true,
    color: "success",
    size: "sm",
    variant: "standard"
  },
};

export const WithClose: Story = {
  render: StoryContainer,
  args: {
    description: "This role has full access to all products, team management, integrations and security settings.",
    withRound: true,
    color: "success",
    size: "sm",
    variant: "standard",
    onClose: () => {}
  },
};

export const WithButton: Story = {
  render: StoryContainer,
  args: {
    description: "This role has full access to all products, team management, integrations and security settings.",
    withRound: true,
    color: "success",
    size: "sm",
    variant: "standard",
    action: (
      <Button
        size="sm"
        color="success"
        variant="text"
        shape="pill"
      >
        UNDO
      </Button>
    )
  },
};
