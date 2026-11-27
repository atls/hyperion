import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'

import type { ListboxStoryProps } from './interfaces.js'

import { useState }               from 'storybook/preview-api'
import { useArgs }                from 'storybook/preview-api'

import { Listbox }                from '../component.js'
import { Option }                 from '../option/component.js'
import { optionShapes }           from '../option/styles/shape/variants.js'
import { listboxShapes }          from '../styles/shape/variants.js'

const meta = {
  title: 'Components/Listbox',
  tags: ['autodocs'],
  args: { shape: 'md', value: 'apple', disabled: false },
  argTypes: {
    shape: { options: Object.keys(listboxShapes), control: 'select' },
    value: { options: ['apple', 'banana'], control: 'select' },
    disabled: { control: 'boolean' },
  },
  render: function Render({ shape, value, disabled }: ListboxStoryProps) {
    const [, updateArgs] = useArgs<ListboxStoryProps>()
    const [focused, setFocused] = useState('apple')
    return (
      <Listbox
        aria-label='Fruit'
        aria-disabled={disabled}
        shape={listboxShapes[shape]}
        onKeyDown={(event) => {
          const options = Array.from(
            event.currentTarget.querySelectorAll<HTMLLIElement>(
              '[role="option"]:not([aria-disabled="true"])'
            )
          )
          const index = options.indexOf(event.target as HTMLLIElement)
          const next = event.key === 'ArrowDown' ? index + 1 : index - 1
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            options.at((next + options.length) % options.length)?.focus()
          }
          if (event.key === 'Home' || event.key === 'End') {
            event.preventDefault()
            options.at(event.key === 'Home' ? 0 : -1)?.focus()
          }
        }}
      >
        {['apple', 'banana', 'orange'].map((item) => (
          <Option
            key={item}
            aria-disabled={disabled || item === 'orange'}
            selected={value === item}
            shape={optionShapes[shape]}
            tabIndex={!disabled && item === focused ? 0 : -1}
            onFocus={() => {
              setFocused(item)
            }}
            onClick={() => {
              if (!disabled && item !== 'orange') updateArgs({ value: item })
            }}
            onKeyDown={(event) => {
              if (!disabled && item !== 'orange' && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                updateArgs({ value: item })
              }
            }}
          >
            {item}
          </Option>
        ))}
      </Listbox>
    )
  },
} satisfies Meta<ListboxStoryProps>

export default meta

export const Base: StoryObj<typeof meta> = { name: 'Базовый' }
