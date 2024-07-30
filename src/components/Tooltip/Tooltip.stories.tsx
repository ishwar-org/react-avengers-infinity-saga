import type { Meta, StoryObj } from '@storybook/react';
import Tooltip, { TooltipProps } from '.';
import Button from '../Buttons/Button';
import IconButton from '../Buttons/IconButton';
import { Check, Info } from '../Icons';
import styles from './index.module.css';

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;


export default meta;
type Story = StoryObj<typeof meta>;

const StoryContainer = (props: TooltipProps) => {
    return (
        <div className={styles.storiesContainer}>
            <Tooltip
                {...props}
            >
                {props.children}
            </Tooltip>
        </div>
    )
};

const storiesArgTypes = {
    argTypes: {
      placement: {
        name: "placement",
        control: {
          type: "radio",
          labels: {
            "top-start": "Top Start",
            top: "Top",
            "top-end": "Top End",
            "right-start": "Right Start",
            right: "Right",
            "right-end": "Right End",
            "bottom-start": "Bottom Start",
            bottom: "Bottom",
            "bottom-end": "Bottom End",
            "left-start": "Left Start",
            left: "Left",
            "left-end": "Left End"
          }
        },
        options: ["top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-start", "bottom", "bottom-end", "left-start", "left", "left-end"],
      },
    }
};

export const Default: Story = {
    render: StoryContainer,
    args: {
        title: "Verified the account",
        children: <IconButton variant="filled" color="success" children={<Check />} />,
        placement: 'bottom',
        open:true
    },
    ...storiesArgTypes
};

export const WithArrow: Story = {
    render: StoryContainer,
    args: {
        title: "You are eligible take a test drive.",
        children: <IconButton variant="filled" color="primary" children={<Info />} />,
        placement: 'bottom',
        arrow: true
    },
    ...storiesArgTypes
};

export const WithFollowCursor: Story = {
    render: StoryContainer,
    args: {
        title: "You are eligible take a test drive.",
        children: <IconButton variant="filled" color="primary" children={<Info />} />,
        placement: 'bottom',
        followCursor: true
    },
    ...storiesArgTypes
};

export const WithText: Story = {
    render: StoryContainer,
    args: {
        title: "Welcome to avengers infinity war",
        children: <span>Info</span>,
        placement: 'top',
    },
    ...storiesArgTypes
};

export const WithButton: Story = {
    render: StoryContainer,
    args: {
        title: "Send the message",
        children: <Button color="primary" variant="contained">Button</Button>,
        placement: 'top',
    },
    ...storiesArgTypes
};

