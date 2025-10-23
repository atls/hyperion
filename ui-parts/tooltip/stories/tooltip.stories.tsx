/* eslint-disable react/jsx-no-leaked-render */

import type { TooltipProps }    from '@atls-ui-parts/tooltip'
import type { Meta }            from '@storybook/react'
import type { StoryObj }        from '@storybook/react'

import { Tooltip }              from '@atls-ui-parts/tooltip'

import { storyTriggerStyles }   from './tooltip.stories.css.js'
import { storyContainerStyles } from './tooltip.stories.css.js'

interface StoryTooltipProps
  extends Pick<TooltipProps, 'animated' | 'arrow' | 'offset' | 'placement' | 'trigger'> {
  customContainer: boolean
}

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
  render: ({ animated, arrow, customContainer, offset, placement, trigger }) => (
    <Tooltip
      animated={animated}
      arrow={arrow && customContainer ? { fill: 'green' } : arrow}
      offset={offset}
      placement={placement}
      trigger={trigger}
      text='Tooltip text'
      container={customContainer ? <div className={storyContainerStyles} /> : undefined}
    >
      <div className={storyTriggerStyles}>Trigger</div>
    </Tooltip>
  ),
}
