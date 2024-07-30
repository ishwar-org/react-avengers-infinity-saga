import type { Meta, StoryObj } from '@storybook/react';

import {
  CreditCard,
  Percent,
  PieChart,
  TrendingUp,
  ArrowRight
} from "./";

const Icons = () => {
  return (
    <>
      <CreditCard />
      <PieChart />
      <TrendingUp />
      <ArrowRight />
      <Percent />
      <p>
        Visit
        <a href="https://mui.com/material-ui/material-icons/" target="_blank" rel="noreferrer">
          Material icons
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

// export const FiltersIcon = () => <div className={styles.filtersLogo} />;
