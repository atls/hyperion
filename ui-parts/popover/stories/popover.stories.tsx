/* eslint-disable react/jsx-no-leaked-render */

import type { PopoverProps }         from '@atls-ui-parts/popover'
import type { Meta }                 from '@storybook/react'
import type { StoryObj }             from '@storybook/react'
import type { PropsWithChildren }    from 'react'
import type { ReactNode }            from 'react'
import type { ReactElement }         from 'react'

import { useState }                  from 'react'

import { Popover }                   from '@atls-ui-parts/popover'

import { storyTriggerStyles }        from './popover.stories.css.js'
import { storyContainerStyles }      from './popover.stories.css.js'
import { storyContainerCloseStyles } from './popover.stories.css.js'

interface StoryPopoverProps
  extends Pick<PopoverProps, 'animated' | 'arrow' | 'offset' | 'placement' | 'trigger'> {
  customContainer: boolean
}

interface StoryPopoverContainerProps extends PropsWithChildren {
  title?: string
  content?: ReactNode
  onClose?: () => void
}

const meta: Meta<StoryPopoverProps> = {
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

const StoryPopoverContainer = ({
  children,
  content,
  title,
  onClose,
}: StoryPopoverContainerProps): ReactElement => (
  <div className={storyContainerStyles}>
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
  arrow,
  customContainer,
  offset,
  placement,
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
      container={customContainer ? <StoryPopoverContainer onClose={handleClose} /> : undefined}
      onOpenChange={setOpen}
    >
      <div className={storyTriggerStyles}>Trigger</div>
    </Popover>
  )
}

export const Base: StoryObj<StoryPopoverProps> = {
  render: StoryPopover,
}
