import type { Meta, StoryObj } from '@storybook/react';

import {
  FiCreditCard,
  FiPercent,
  FiPieChart,
  FiTrendingUp,
  FiArrowRight
} from "./";

const Icons = () => {
  return (
    <>
      <FiCreditCard />
      <FiPieChart />
      <FiTrendingUp />
      <FiArrowRight />
      <FiPercent />
      <p>
        Visit
        <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer">
          React Icons
        </a>
        for all icons
      </p>
    </>
  );
};

const meta = {
  title: "Components/Icons",
  component: Icons,
  tags: ["autodocs"],
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
