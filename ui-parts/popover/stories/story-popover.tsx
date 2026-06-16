import type { ReactElement }            from 'react'

import type { StoryPopoverProps }       from './interfaces.js'

import { useState }                     from 'react'

import { Popover }                      from '@atls-ui-parts/popover'
import { vars }                         from '@atls-ui-parts/theme'

import { StoryPopoverContainer }        from './story-popover-container.js'
import { storyContentAppearanceStyles } from './styles.css.js'
import { storyContentShapeStyles }      from './styles.css.js'
import { storyRootAppearanceStyles }    from './styles.css.js'
import { storyRootShapeStyles }         from './styles.css.js'
import { storyTitleAppearanceStyles }   from './styles.css.js'
import { storyTitleShapeStyles }        from './styles.css.js'
import { storyTriggerStyles }           from './styles.css.js'

export const StoryPopover = ({
  animated,
  arrow,
  customContainer,
  offset,
  placement,
  styledContainer,
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
      arrow={arrow && styledContainer ? { fill: vars.colors.blue } : arrow}
      offset={offset}
      placement={placement}
      trigger={trigger}
      title='Popover title'
      content='Popover content'
      container={customContainer ? <StoryPopoverContainer onClose={handleClose} /> : undefined}
      appearance={
        styledContainer
          ? {
              root: storyRootAppearanceStyles,
              title: storyTitleAppearanceStyles,
              content: storyContentAppearanceStyles,
            }
          : undefined
      }
      shape={
        styledContainer
          ? {
              root: storyRootShapeStyles,
              title: storyTitleShapeStyles,
              content: storyContentShapeStyles,
            }
          : undefined
      }
      onOpenChange={setOpen}
    >
      <div className={storyTriggerStyles}>Trigger</div>
    </Popover>
  )
}
