import type { Meta, StoryObj } from '@storybook/react';
import IconButton, { IconButtonProps } from '.';
import { Trash2 } from '../../Icons';

const meta = {
    title: "Components/Buttons/IconButton",
    component: IconButton,
    parameters: {
      layout: 'centered',
    },
    tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;
  
export default meta;
type Story = StoryObj<typeof meta>;
  
const StoryContainer = (props: IconButtonProps) => {
    return (
        <IconButton
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
            filled: "Filled",
            outlined: "Outlined"
          },
        },
        options: ["filled", "outlined"],
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
    }
};


export const Default: Story = {
    render: StoryContainer,
    args: {
      size:"sm",
      color: "primary",
      variant: "filled",
      children: <Trash2 />,
      disabled: false,
    },
    ...storiesArgTypes
};
