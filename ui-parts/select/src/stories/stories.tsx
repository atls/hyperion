import type { Meta }         from '@storybook/react'
import type { StoryObj }     from '@storybook/react'

import { useArgs }           from 'storybook/preview-api'

import { Select }            from '../component.js'
import { selectAppearances } from '../styles/appearance/variants.js'
import { selectShapes }      from '../styles/shape/variants.js'
import { previewStyles }     from './styles.css.js'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange', disabled: true },
    ],
    value: 'apple',
    disabled: false,
    placeholder: 'Choose a fruit',
    shape: selectShapes.md,
    appearance: 'default',
  },
  argTypes: {
    shape: { options: Object.keys(selectShapes), mapping: selectShapes, control: 'select' },
    appearance: { options: Object.keys(selectAppearances), control: 'select' },
    options: { control: 'object' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    indicator: { control: false },
    renderOption: { control: false },
    triggerProps: { control: false },
    menuProps: { control: false },
  },
} satisfies Meta<typeof Select>
export default meta
export const Base: StoryObj<typeof meta> = {
  name: 'Базовый',
  render: function Render(args) {
    const [, updateArgs] = useArgs()
    return (
      <div className={previewStyles}>
        <Select
          {...args}
          onChange={(nextValue) => {
            updateArgs({ value: nextValue })
          }}
        />
      </div>
    )
  },
}
