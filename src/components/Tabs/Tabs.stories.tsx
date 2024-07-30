import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Tabs, { TabsProps } from '.';
import Button from '../Buttons/Button';

const meta = {
    title: "Components/Tabs",
    component: Tabs,
    tags: ["autodocs"],
  } satisfies Meta<typeof Tabs>;
  
export default meta;
type Story = StoryObj<typeof meta>;

const StoryContainer = (props: TabsProps) => {
    const { activeTab } = props;
    const [currentTab, setCurrentTab] = useState(activeTab);
    return (
        <Tabs
            {...props}
            activeTab={currentTab}
            onChange={setCurrentTab}
        />
    )
};

const storiesArgTypes = {
    argTypes: {
        orientation: {
            name: "orientation",
            control: {
                type: "radio",
                labels: {
                     horizontal: 'Horizontal',
                    vertical: "Vertical"
                }
            },
            options: ['horizontal', 'vertical'],
        },
        variant: {
            name: "variant",
            control: {
                type: "radio",
                labels: {
                    standard: 'Standard',
                    scrollable: 'Scrollable',
                    fullWidth: 'Full Width'
                }
            },
            options: ['standard', 'scrollable', 'fullWidth'],
        }
    }
};

export const Default: Story = {
    render: StoryContainer,
    args: {
        activeTab: 0,
        tabOptions: [
            {
                label: "Account Details",
                component: <>This is Account Details</>,
            },
            {
                label: "Wire Transfer",
                component: <Button color="primary" variant="contained">Send Money</Button>,
            },
            {
                label: "Statements & Documents",
                component: <>This is Statements</>,
            },
            {
                label: "Documents",
                component: <>This is Documents</>,
            },
            {
                label: "Pricing",
                component: <>This is Pricing</>,

            },
            {
                label: "Status",
                component: <>This is Status</>,

            },
            {
                label: "Privacy and Settings",
                component: <>This is privacy and settings</>,

            },
            {
                label: "Status",
                component: <>This is Status</>,

            },
            {
                label: "Privacy and Settings",
                component: <>This is privacy and settings</>,

            },
            {
                label: "Status",
                component: <>This is Status</>,

            },
            {
                label: "Privacy and Settings",
                component: <>This is privacy and settings</>,

            },
        ],
        orientation: 'vertical',
        centered: false,
        variant: 'scrollable',
    },
    ...storiesArgTypes
};