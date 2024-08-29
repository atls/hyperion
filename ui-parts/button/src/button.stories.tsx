import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { Button }        from './button.component.js'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Контент',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    variant: {
      description: 'Вариант кнопки',
      control: { type: 'inline-radio' },
      options: ['blue', 'lightBlue'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    size: {
      description: 'Размер кнопки',
      control: { type: 'select' },
      options: [
        'normal',
        'medium',
        'large',
        'small',
        'huge',
        'smallSizeMediumRadii',
        'autoSize',
        'semiMedium',
        'autoSizeRound',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'huge' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Variants: Story = {
  args: {
    children: 'Text',
    variant: 'blue',
    size: 'huge',
  },
}
