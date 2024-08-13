import type { Meta, StoryObj } from '@storybook/react';
import AvatarGroup, { AvatarGroupProps } from '.';


const meta: Meta<AvatarGroupProps> = {
  	title: "Components/Avatars/AvatarGroup",
  	component: AvatarGroup,
  	tags: ["autodocs"],
  	argTypes: {
		size: {
			name: "size",
			control: {
				type: "radio",
				labels: {
					xxs: "xxs",
					xs: "xs",
					sm: "sm",
					md: "md",
					lg: "lg",
					xl: "xl",
					xxl: "xxl"
				},
			},
			options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
		},
	}
};

export default meta;
type Story = StoryObj<AvatarGroupProps>;

const StoryContainer = (props: AvatarGroupProps) => {
  return (
    <AvatarGroup
      {...props}
    />
  );
};

export const Default: Story = {
	render: StoryContainer,
	args: {
		avatarList: [
			{fullName: "Ishwar Deoolkar", variant: "circular", withBadge: true},
			{fullName: "Ashwini Deoolkar", variant: "circular", withBadge: false},
			{fullName: "Dattatreya Deoolkar", src: "https://mui.com/static/images/avatar/2.jpg", alt:"Dattatreya Deoolkar", variant: "circular", withBadge: false},
			{fullName: "Pavan Deoolkar", variant: "circular", withBadge: false},
			{fullName: "Pranil Deoolkar", variant: "circular", withBadge: false},
			{fullName: "Vaishanvi Deoolkar", variant: "circular", withBadge: false},
		],
		max: 4,
	},
}