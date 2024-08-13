import type { Meta, StoryObj } from '@storybook/react';
import { Smile } from '../Icons';
import Chip, { ChipProps } from '.';

const meta: Meta<ChipProps> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
		size: {
			name: "size",
			control: {
				type: "radio",
				labels: {
					small: "Small",
					medium: "Meidum",
				},
			},
			options: ["small", "medium"],
		},
    icon: { table: { disable: true } },
    variant: {
      name: "variant",
      control: {
        type: "radio",
        labels: {
          filled: "Filled",
          outlined: "Outlined",
        },
      },
      options: ["filled", "outlined"],
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
	}
};

export default meta;
type Story = StoryObj<ChipProps>;

const StoryContainer = (props: ChipProps) => {
  return (
    <Chip
      {...props}
    />
  );
};

export const Default: Story = {
    render: StoryContainer,
    args: {
        label: "New Arrival",
        icon: <Smile />,
        variant: "outlined",
        color: "primary",
        withRound: true,
        size: "small"
    },
};