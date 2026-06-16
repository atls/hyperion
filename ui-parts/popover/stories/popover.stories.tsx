import type { Meta }                       from '@storybook/react'
import type { StoryObj }                   from '@storybook/react'
import type { ReactElement }               from 'react'

import type { StoryPopoverContainerProps } from './interfaces.js'
import type { StoryPopoverProps }          from './interfaces.js'

import { useState }                        from 'react'

import { Popover }                         from '@atls-ui-parts/popover'

import { popoverAppearances }              from '../src/styles/index.js'
import { popoverShapes }                   from '../src/styles/index.js'
import { storyContainerAppearanceStyles }  from './styles.css.js'
import { storyContainerCloseStyles }       from './styles.css.js'
import { storyContainerShapeStyles }       from './styles.css.js'
import { storyTriggerStyles }              from './styles.css.js'

const storyContainerClassName = [storyContainerAppearanceStyles, storyContainerShapeStyles].join(
  ' '
)

const CustomContainer = ({
  children,
  content,
  onClose,
  title,
}: StoryPopoverContainerProps): ReactElement => (
  <div className={storyContainerClassName}>
    <div>{title}</div>
    <div>{content}</div>
    <button type='button' className={storyContainerCloseStyles} onClick={onClose}>
      Close
    </button>
    {children}
  </div>
)

const StoryPopover = ({
  animated,
  appearance,
  arrow,
  container,
  offset,
  placement,
  shape,
  trigger,
}: StoryPopoverProps): ReactElement => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <Popover
      open={open}
      animated={animated}
      arrow={arrow}
      offset={offset}
      placement={placement}
      trigger={trigger}
      title='Popover title'
      content='Popover content'
      container={container === 'custom' ? <CustomContainer onClose={handleClose} /> : undefined}
      appearance={popoverAppearances[appearance]}
      shape={popoverShapes[shape]}
      onOpenChange={setOpen}
    >
      <div className={storyTriggerStyles}>Trigger</div>
    </Popover>
  )
}

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
    container: {
      description: 'Контейнер',
      control: { type: 'select' },
      options: ['default', 'custom'],
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
    container: 'default',
    offset: 10,
    placement: 'top',
    shape: 'default',
    trigger: 'click',
  },
} satisfies Meta<StoryPopoverProps>

export const Base: StoryObj<StoryPopoverProps> = {
  render: StoryPopover,
}
