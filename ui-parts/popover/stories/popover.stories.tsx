import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'
import type { ReactElement }      from 'react'

import type { StoryPopoverProps } from './interfaces.js'

import { Popover }                from '@atls-ui-parts/popover'

import { popoverAppearances }     from '../src/styles/index.js'
import { popoverShapes }          from '../src/styles/index.js'
import { storyTriggerStyles }     from './styles.css.js'

const StoryPopover = ({
  animated,
  appearance,
  arrow,
  offset,
  placement,
  shape,
  trigger,
}: StoryPopoverProps): ReactElement => (
  <Popover
    animated={animated}
    arrow={arrow}
    offset={offset}
    placement={placement}
    trigger={trigger}
    content='Popover content'
    appearance={popoverAppearances[appearance]}
    shape={popoverShapes[shape]}
  >
    <div className={storyTriggerStyles}>Trigger</div>
  </Popover>
)

export default {
  title: 'Components/Popover',
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
    appearance: {
      description: 'Вариант поповера',
      control: { type: 'inline-radio' },
      options: Object.keys(popoverAppearances),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
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
    shape: {
      description: 'Размер поповера',
      control: { type: 'inline-radio' },
      options: Object.keys(popoverShapes),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    trigger: {
      description: 'Триггер',
      control: { type: 'select' },
      options: ['click', 'hover'],
    },
  },
  args: {
    animated: true,
    appearance: 'default',
    arrow: true,
    offset: 10,
    placement: 'top',
    shape: 'default',
    trigger: 'click',
  },
} satisfies Meta<StoryPopoverProps>

export const Base: StoryObj<StoryPopoverProps> = {
  render: StoryPopover,
}
