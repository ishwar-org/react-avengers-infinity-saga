import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import AvatarUploader, { AvatarUploaderProps } from '.';

const meta: Meta<AvatarUploaderProps> = {
    title: 'Components/AvatarUploader',
    component: AvatarUploader,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            name: 'variant',
            control: {
                type: 'radio',
                labels: {
                    circle: 'Cirlce',
                    square: 'Square',
                },
            },
            options: ['circle', 'square'],
        },
    },
};

export default meta;
type Story = StoryObj<AvatarUploaderProps>;

const StoryContainer = (props: AvatarUploaderProps) => {
    const [logoSrc, setLogoSrc] = useState<string | File>('');
    return (
        <AvatarUploader
            {...props}
            src={logoSrc}
            onChange={(file) => setLogoSrc(file)}
        />
    );
};

export const Default: Story = {
    render: StoryContainer,
    args: {
        accept: 'image/*',
        isLoading: false,
    },
};

export const OrientationSquare: Story = {
    render: StoryContainer,
    args: {
        accept: 'image/*',
        isLoading: false,
        variant: 'circle',
    },
};

export const WithLoading: Story = {
    render: StoryContainer,
    args: {
        accept: 'image/*',
        isLoading: true,
        variant: 'circle',
    },
};
