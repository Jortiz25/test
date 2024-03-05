import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'
import { type ButtonProps } from './button.model'

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
    },
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Hola',
    variant: 'btn-primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'btn-primary',
    size: 'btn-medium',
  },
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'btn-large',
  },
}

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'btn-small',
  },
}
