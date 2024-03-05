import type { Meta, StoryObj } from '@storybook/react'
import { InputLabel } from './index'
import { type InputProps } from './input.model'

const meta = {
  title: 'Example/Input',
  component: InputLabel,
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
} satisfies Meta<InputProps>

export default meta
type Story = StoryObj<typeof meta>

export const InputLabelComponent: Story = {
  args: {
    label: 'Hola mundo',
    placeholder: 'Hola mundo',
  },
}
