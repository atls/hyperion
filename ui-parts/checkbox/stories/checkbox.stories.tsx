import type { Meta }          from '@storybook/react'
import type { StoryObj }      from '@storybook/react'

import type { CheckboxProps } from '../src/checkbox.interfaces.js'

import React                  from 'react'

import { Column }             from '@atls-ui-parts/layout'
import { Layout }             from '@atls-ui-parts/layout'

import { Checkbox }           from '../src/checkbox.component.js'

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  render: (props) => (
    <Column fill alignItems='center'>
      <Layout flexBasis='40px' />
      <Checkbox {...props} />
      <Layout flexBasis='40px' />
    </Column>
  ),
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
}

export default meta

type Story = StoryObj<CheckboxProps>

export const Base: Story = {
  name: 'Базовый',
  args: {
    onCheck: () => undefined,
    active: false,
    labelPosition: 'start',
    size: 'medium',
    color: 'blue',
    children: 'Checkbox Label',
  },
}
