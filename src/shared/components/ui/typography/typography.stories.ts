import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './index'
import { type TypographyProps } from './typography.model'

const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<TypographyProps>

export default meta
type Story = StoryObj<typeof meta>

export const InputLabelComponent: Story = {
  args: {
    children: 'Hola mundo',
    // size:"md",
    variant: 'h1',
  },
}
