import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import { Input }            from '../src/input.component.js'
import { inputAppearances } from '../src/index.js'
import { inputShapes }      from '../src/index.js'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      description: 'Вариант инпута',
      control: { type: 'inline-radio' },
      options: Object.keys(inputAppearances),
      mapping: inputAppearances,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    shape: {
      description: 'Размер инпута',
      control: { type: 'inline-radio' },
      options: Object.keys(inputShapes),
      mapping: inputShapes,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Variants: Story = {
  args: {
    appearance: inputAppearances.white,
    shape: inputShapes.normal,
  },
}
