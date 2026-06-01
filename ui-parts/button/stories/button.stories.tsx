import type { Meta }         from '@storybook/react'
import type { StoryObj }     from '@storybook/react'

import { Button }            from '../src/button.component.js'
import { buttonAppearances } from '../src/styles/appearance.css.js'
import { buttonShapes }      from '../src/styles/shape.css.js'

type ButtonAppearanceName = keyof typeof buttonAppearances
type ButtonShapeName = keyof typeof buttonShapes

interface ButtonStoryProps {
  appearance: ButtonAppearanceName
  children: string
  shape: ButtonShapeName
}

const meta: Meta<ButtonStoryProps> = {
  title: 'Components/Button',
  render: ({ appearance, shape, ...props }) => (
    <Button {...props} appearance={buttonAppearances[appearance]} shape={buttonShapes[shape]} />
  ),
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      description: 'Вариант кнопки',
      control: { type: 'inline-radio' },
      options: Object.keys(buttonAppearances),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    children: {
      description: 'Контент',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    shape: {
      description: 'Размер кнопки',
      control: { type: 'select' },
      options: Object.keys(buttonShapes),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'huge' },
      },
    },
  },
}

export default meta

type Story = StoryObj<ButtonStoryProps>

export const Variants: Story = {
  args: {
    children: 'Text',
    appearance: 'blue',
    shape: 'huge',
  },
}
