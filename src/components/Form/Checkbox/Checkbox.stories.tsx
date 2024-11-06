import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Checkbox, { CheckboxProps } from ".";
import { MdFavoriteBorder, MdFavorite } from "../../Icons";

const meta: Meta<CheckboxProps> = {
  title: "Components/Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "label",
      control: {
        type: "radio",
        labels: {
          "": "Without Label",
          label: "With Label",
        },
      },
      options: ["", "label"],
      mapping: {
        label: "Label",
      },
    },
    size: {
      name: "size",
      control: {
        type: "radio",
        labels: {
          small: "Small",
          medium: "Medium",
          large: "Large",
        },
      },
      options: ["small", "medium", "large"],
    },
    color: {
      name: "color",
      control: {
        type: "radio",
        labels: {
          primary: "Primary",
          info: "Info",
          secondary: "Secondary",
          success: "Success",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxProps>;

const StoryContainer = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      {...props}
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
};

export const Default: Story = {
  render: StoryContainer,
  args: {
    id: "checkbox-id",
    name: "checkbox",
    size: "small",
    color: "primary",
  },
};

export const WithLabel: Story = {
  render: StoryContainer,
  args: {
    id: "checkbox-label",
    name: "checkbox-label",
    label: "Label",
  },
};

export const WithIcon: Story = {
  render: StoryContainer,
  args: {
    id: "checkbox-icon",
    name: "checkbox-icon",
    label: "Favorite",
    icon: <MdFavoriteBorder />,
    checkedIcon: <MdFavorite />,
  },
};
