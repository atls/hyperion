import type { Meta }          from '@storybook/react'
import type { StoryObj }      from '@storybook/react'

import { useArgs }            from 'storybook/preview-api'

import { Autocomplete }       from '../component.js'
import { autocompleteShapes } from '../styles/shape/variants.js'
import { previewStyles }      from './styles.css.js'
const meta = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'apricot', label: 'Apricot' },
      { value: 'avocado', label: 'Avocado', disabled: true },
      { value: 'banana', label: 'Banana' },
    ],
    value: null,
    loading: false,
    disabled: false,
    shape: autocompleteShapes.md,
    appearance: 'default',
    placeholder: 'Enter text...',
  },
  argTypes: {
    shape: {
      control: 'select',
      options: Object.keys(autocompleteShapes),
      mapping: autocompleteShapes,
    },
    appearance: { control: 'select', options: ['default'] },
    options: { control: 'object' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    'aria-label': { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    inputValue: { control: false },
    filterOptions: { control: false },
    renderOption: { control: false },
    indicator: { control: false },
    loadingContent: { control: false },
    emptyContent: { control: false },
    animation: { control: false },
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs()
    return (
      <div className={previewStyles}>
        <Autocomplete
          {...args}
          onChange={(value) => {
            updateArgs({ value })
          }}
        />
      </div>
    )
  },
} satisfies Meta<typeof Autocomplete>
export default meta
export const Base: StoryObj<typeof meta> = { name: 'Базовый' }
