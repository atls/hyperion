import type { TooltipProps }   from '@atls-ui-parts/tooltip'
import type { Meta }           from '@storybook/react'
import type { StoryObj }       from '@storybook/react'
import type { HTMLAttributes } from 'react'
import type { ReactNode }      from 'react'

import React                   from 'react'

import { Tooltip }             from '@atls-ui-parts/tooltip'

import { testContainerStyles } from './tooltip.css.js'
import { testButtonStyles }    from './tooltip.css.js'

type StoryTooltipProps = Pick<
  TooltipProps,
  'animated' | 'arrow' | 'container' | 'offset' | 'placement' | 'trigger'
>

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
    container: {
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
      description: 'Тригер',
      control: { type: 'select' },
      options: ['click', 'hover'],
    },
  },
  args: {
    animated: true,
    arrow: true,
    offset: 10,
    placement: 'top',
    trigger: 'click',
  },
}

export default meta

const TestButton = ({ children, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={testButtonStyles} {...props}>
    {children}
  </div>
)

export const Base: StoryObj<StoryTooltipProps> = {
  render: ({ animated, arrow, offset, placement, container, trigger }) => (
    <Tooltip
      animated={animated}
      arrow={arrow}
      offset={offset}
      placement={placement}
      trigger={trigger}
      text='Tooltip text'
      container={container ? <div className={testContainerStyles} /> : undefined}
    >
      <TestButton>Trigger</TestButton>
    </Tooltip>
  ),
}
