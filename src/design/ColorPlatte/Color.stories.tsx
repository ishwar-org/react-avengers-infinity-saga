import type { Meta, StoryObj } from "@storybook/react";
import { COLORS } from "../../utils";
import ColorPlatte from ".";

const meta = {
  title: "Design/Color",
  component: ColorPlatte,
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPlatte>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colors: COLORS
  }
}