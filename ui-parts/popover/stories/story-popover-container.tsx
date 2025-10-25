import type { ReactElement }               from 'react'

import type { StoryPopoverContainerProps } from './interfaces.js'

import { storyContainerStyles }            from './styles.css.js'
import { storyContainerCloseStyles }       from './styles.css.js'

export const StoryPopoverContainer = ({
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
