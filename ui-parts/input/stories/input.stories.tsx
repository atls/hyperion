import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import { Input }            from '../src/input.component.js'
import { inputAppearances } from '../src/index.js'
import { inputShapes }      from '../src/index.js'

type InputAppearanceName = keyof typeof inputAppearances
type InputShapeName = keyof typeof inputShapes

interface InputStoryProps {
  appearance: InputAppearanceName
  shape: InputShapeName
}

const meta: Meta<InputStoryProps> = {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: ({ appearance, shape, ...props }) => (
    <Input {...props} appearance={inputAppearances[appearance]} shape={inputShapes[shape]} />
  ),
  argTypes: {
    appearance: {
      description: 'Вариант инпута',
      control: { type: 'inline-radio' },
      options: Object.keys(inputAppearances),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    shape: {
      description: 'Размер инпута',
      control: { type: 'inline-radio' },
      options: Object.keys(inputShapes),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
  },
}

export default meta

type Story = StoryObj<InputStoryProps>

export const Variants: Story = {
  args: {
    appearance: 'white',
    shape: 'normal',
  },
}
