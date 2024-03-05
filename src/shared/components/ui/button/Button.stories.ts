import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { type ButtonProps } from './button.model';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    }
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Hola',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
};
