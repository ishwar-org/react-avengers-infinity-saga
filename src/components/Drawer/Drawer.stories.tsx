import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Drawer, { DrawerProps } from '.';
import Button from '../Buttons/Button';
import IconButton from '../Buttons/IconButton';
import { FiEdit2, FiTrash2, FiEye } from '../Icons';

const meta: Meta<DrawerProps> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    anchor: {
      name: "anchor",
      control: {
        type: "radio",
        labels: {
          top: "Top",
          bottom: "Bottom",
          left: "Left",
          right: "Right"
        },
      },
      options: ["top", "bottom", "left", "right"],
    },
  }
};

export default meta;
type Story = StoryObj<DrawerProps>;

const StoryContainer = (props: DrawerProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const toogleOpen = () => setOpen(!open);

  const onClose = () => {
    setOpen(false)
  }

  const onBackClick = () => {
    onClose();
  }
  return (
    <>
        <Button
            onClick={toogleOpen}
            children="Open Drawer"
        />
        <Drawer
            {...props}
            open={open}
            onClose={onClose}
            onBackClick={onBackClick}
        >
            {props.children}
        </Drawer>
    </>
  );
};

export const Default: Story = {
    render: StoryContainer,
    args: {
        anchor: "right",
        actionIcons: (
            <>
                <IconButton
                    size="sm"
                    color="secondary"
                    variant="outlined"
                >
                    <FiEye />
                </IconButton>
                <IconButton
                    size="sm"
                    color="secondary"
                    variant="outlined"
                >
                    <FiEdit2 />
                </IconButton>
                <IconButton
                    size="sm"
                    color="secondary"
                    variant="outlined"
                >
                    <FiTrash2 />
                </IconButton>
            </>
        ),
        children: (
            <div>
                <p>content goes here</p>
            </div>
        )
    },
}