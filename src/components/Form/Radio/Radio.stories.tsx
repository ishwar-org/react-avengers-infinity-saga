import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Radio, { RadioProps } from '.';

const meta = {
    title: "Components/Form/Radio",
    component: Radio,
    tags: ["autodocs"],
} satisfies Meta<typeof Radio>;
  
export default meta;
type Story = StoryObj<typeof meta>;

const StoryContainer = (props: RadioProps) => {
    const [selectedValue, setSelectedValue] = useState('');
    return (
      <Radio
        {...props}
        value={selectedValue || props.value}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
    );
};

const radioOptions = [
    {label: 'Male', value:"male"},
    {label: 'Female', value:"female"}
];

const storiesArgTypes = {
	argTypes: {
        label: {
            name: "label",
            control: {
                type: "radio",
                labels: {
                    "": "Without Label",
                    label: "With Label"
                },
            },
            options: ["", "label"],
            mapping: {
                label: "Gender",
            },
        },
        color: {
            name: "color",
            control: {
                type: "radio",
                labels: {
                    primary: "Primary",
                    success: 'Success',
                    grey: 'Grey',
                }
            },
            options: ["primary", "success", "grey"],
        },
    }
};

export const Default: Story = {
    render: StoryContainer,
    args: {
        id: 'gender',
        name: 'gender',
        label: 'Gender',
        color: 'primary',
        horizontal: false,
        value: 'male',
        options: radioOptions
    },
    ...storiesArgTypes
};

export const AlignHorizontalRadio: Story = {
    render: StoryContainer,
    args: {
        id: 'gender',
        name: 'gender',
        label: 'Gender',
        horizontal: true,
        color: 'grey',
        options: radioOptions
    },
    ...storiesArgTypes
}


