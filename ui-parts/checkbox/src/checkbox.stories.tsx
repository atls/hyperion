import { Meta }                          from '@storybook/react'
import { StoryObj }                      from '@storybook/react'

import { Checkbox as CheckboxComponent } from './checkbox.component.js'

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    active: {
      name: 'Active',
      description: 'Is the checkbox checked',
      control: { type: 'boolean' },
    },
    color: {
      name: 'Color',
      description: 'Color of the divider',
      control: { type: 'select' },
      options: ['red', 'blue', 'green'],
    },
    size: {
      name: 'Size',
      description: 'Size of the divider',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    labelPosition: {
      name: 'Label position',
      description: 'Label position',
      control: { type: 'select' },
      options: ['start', 'top', 'end', 'bottom'],
    },
  },
} as Meta

type Story = StoryObj<typeof CheckboxComponent>

export const Checkbox: Story = {
  args: {
    onCheck: () => {},
    active: false,
    labelPosition: 'end',
    size: 'medium',
    color: 'blue',
    children: 'Checkbox Label',
  },
}
