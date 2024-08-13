import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@mui/material';
import { ReactNode } from 'react';
import Avatar, { AvatarProps } from '.';

const meta: Meta<AvatarProps> = {
  title: "Components/Avatars/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      name: "size",
      control: {
        type: "radio",
        labels: {
          xxs: "XXS",
          xs: "XS",
          sm: "SM",
          md: "MD",
          lg: "LG",
          xl: "XL",
          xxl: "XXL",
        },
      },
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
    },
    variant: {
      name: "variant",
      control: {
        type: "radio",
        labels: {
          circular: "Circular",
          rounded: "Rounded",
          square: "Square",
        },
      },
      options: ["circular", "rounded", "square"],
    },
  }
};

export default meta;

type Story = StoryObj<AvatarProps>;

const StoryContainer = (props: AvatarProps) => {
  return (
    <Avatar
      {...props}
    />
  );
};

type Props = {
  children: ReactNode;
};

const Row = ({ children }: Props) => (
  <Grid container item alignItems="center" gap={3} flexWrap="nowrap">
    {children}
  </Grid>
);

const sizes = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"] as const;

type StoryRowProps = {
  fullName?: string;
  src?: string;
  badge?: boolean;
};

const StoryRow = (props: StoryRowProps) => (
  <Row>
    {sizes.map((size, i) => (
      <Avatar key={i} {...props} size={size} />
    ))}
  </Row>
);

const variations = [
  {
    src: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    fullName: "Ashwini Deoolkar",
  },
  {
    src: "https://mui.com/static/images/avatar/2.jpg",
    withBadge: true,
  },
  {
    fullName: "Ishwar Deoolkar",
    withBadge: true,
  },
];

export const Reference: Story = {
  render: () => (
    <Grid container direction="column" gap={2}>
      {variations.map((props, i) => (
        <StoryRow key={i} {...props} />
      ))}
    </Grid>
  ),
};

export const Default: Story = {
  render: StoryContainer,
  args: {
    size: "md",
    fullName: "Ashwini Deoolkar",
    variant: "circular",
  },
};
