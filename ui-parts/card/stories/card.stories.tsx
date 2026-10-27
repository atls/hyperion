import type { Meta }       from '@storybook/react'
import type { StoryObj }   from '@storybook/react'

import type { CardProps }  from '../src/card.interfaces.js'

import { Card }            from '../src/card.component.js'
import { cardAppearances } from '../src/styles/appearance/index.js'
import { cardShapes }      from '../src/styles/shape/index.js'

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: (props) => <Card {...props} style={{ width: '200px', ...props.style }} />,
  argTypes: {
    appearance: {
      name: 'Appearance',
      control: { type: 'select' },
      options: Object.keys(cardAppearances),
    },
    shape: {
      name: 'Shape',
      control: { type: 'select' },
      options: Object.keys(cardShapes),
      mapping: cardShapes,
    },
    clickable: {
      name: 'Clickable',
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
    },
  },
}

export default meta

export const Base: StoryObj<CardProps> = {
  name: 'Базовый',
  args: {
    appearance: 'elevated',
    children: 'Card content',
    clickable: true,
    shape: cardShapes.md,
  },
}
