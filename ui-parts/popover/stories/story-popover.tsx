/* eslint-disable react/jsx-no-leaked-render */

import type { ReactElement }      from 'react'

import type { StoryPopoverProps } from './interfaces.js'

import { useState }               from 'react'

import { Popover }                from '@atls-ui-parts/popover'

import { StoryPopoverContainer }  from './story-popover-container.js'
import { storyTriggerStyles }     from './styles.css.js'

export const StoryPopover = ({
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
