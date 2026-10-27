import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'

import type { PlaceholderProps }  from '../src/placeholder.interfaces.js'

import { ImagePlaceholderIcon }   from '@atls-ui-parts/icons'

import { Placeholder }            from '../src/placeholder.component.js'
import { placeholderAppearances } from '../src/styles/appearance/index.js'
import { placeholderShapes }      from '../src/styles/shape/index.js'

const meta: Meta<PlaceholderProps> = {
  title: 'Components/Placeholder',
  tags: ['autodocs'],
  render: (props) => <Placeholder {...props} />,
  argTypes: {
    appearance: {
      name: 'Appearance',
      control: { type: 'select' },
      options: Object.keys(placeholderAppearances),
    },
    shape: {
      name: 'Shape',
      control: { type: 'select' },
      options: Object.keys(placeholderShapes),
      mapping: placeholderShapes,
    },
    textPosition: {
      name: 'Text position',
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
}

export default meta

export const Base: StoryObj<PlaceholderProps> = {
  name: 'Базовый',
  args: {
    appearance: 'default',
    description: 'Попробуй изменить параметры поиска',
    icon: <ImagePlaceholderIcon />,
    shape: placeholderShapes.md,
    textPosition: 'bottom',
    title: 'Ничего не найдено',
  },
}
