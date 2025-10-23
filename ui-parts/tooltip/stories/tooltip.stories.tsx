import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'

import type { StoryTooltipProps } from './interfaces.js'

import { StoryTooltip }           from './story-tooltip.js'

const meta: Meta<StoryTooltipProps> = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    animated: {
      description: 'Анимированный',
      control: { type: 'boolean' },
    },
    arrow: {
      description: 'Указатель',
      control: { type: 'boolean' },
    },
    customContainer: {
      description: 'Свой контейнер',
      control: { type: 'boolean' },
    },
    offset: {
      description: 'Офсет',
      control: { type: 'number' },
    },
    placement: {
      description: 'Расположение',
      control: { type: 'select' },
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-end',
        'top-start',
        'right-end',
        'right-start',
        'bottom-end',
        'bottom-start',
        'left-end',
        'left-start',
      ],
    },
    trigger: {
      description: 'Триггер',
      control: { type: 'select' },
      options: ['click', 'hover'],
    },
  },
  args: {
    animated: true,
    arrow: true,
    customContainer: false,
    offset: 10,
    placement: 'top',
    trigger: 'click',
  },
}

export default meta

export const Base: StoryObj<StoryTooltipProps> = {
  render: StoryTooltip,
}
