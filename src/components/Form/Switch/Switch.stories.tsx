import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import Switch, { SwitchProps } from '.';

const meta: Meta<SwitchProps> = {
  title: "Components/Form/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "label",
      control: {
        type: "radio",
        labels: {
          "": "Without",
          label: "With"
        }
      },
      options: ["", "label"],
      mapping: {
        label: "Eligible",
      },
    },
    color: {
      name: "color",
      control: {
        type: "radio",
        labels: {
          primary: "Primary",
          secondary: "Secondary",
          success: "Success",
          warning: "Warning"
        }
      },
      options: ["primary", "secondary", "success", "warning"],
    },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;

const StoryContainer: React.FC<SwitchProps> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (args.onChange) {
      args.onChange(e); // Call the onChange prop if provided
    }
  };

  return (
    <Switch
      {...args}
      checked={checked}
      onChange={handleChange}
    />
  );
};

// Default story
export const Default: Story = {
  render: (args) => <StoryContainer {...args} id={args.id} name={args.name} checked={args.checked} />,
  args: {
    id: "default",
    name: 'default',
    required: false,
    disabled: false,
    checked: false,
    disableRipple: false,
    color: 'primary',
    inputProps: {
      'aria-label': 'controlled',
    },
    "data-testid": "test-switch",
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      alert(`Switch is now ${e.target.checked ? 'ON' : 'OFF'}`);
    },
  },
};
