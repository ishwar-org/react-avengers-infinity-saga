import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Drawer, { DrawerProps } from '.';
import Button from '../Buttons/Button';
import IconButton from '../Buttons/IconButton';
import { Edit2, Trash2, Eye } from '../Icons';

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

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

const storiesArgTypes = {
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
                    <Eye />
                </IconButton>
                <IconButton
                    size="sm"
                    color="secondary"
                    variant="outlined"
                >
                    <Edit2 />
                </IconButton>
                <IconButton
                    size="sm"
                    color="secondary"
                    variant="outlined"
                >
                    <Trash2 />
                </IconButton>
            </>
        ),
        children: (
            <div>
                <p>content goes here</p>
            </div>
        )
    },
    ...storiesArgTypes
}