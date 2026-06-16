import type { PopoverProps }          from '@atls-ui-parts/popover'
import type { PropsWithChildren }     from 'react'
import type { ReactNode }             from 'react'

import type { PopoverAppearanceName } from '../src/styles/index.js'
import type { PopoverShapeName }      from '../src/styles/index.js'

export type StoryPopoverContainer = 'custom' | 'default'

export interface StoryPopoverProps
  extends Pick<PopoverProps, 'animated' | 'arrow' | 'offset' | 'placement' | 'trigger'> {
  appearance: PopoverAppearanceName
  container: StoryPopoverContainer
  shape: PopoverShapeName
}

export interface StoryPopoverContainerProps extends PropsWithChildren {
  title?: string
  content?: ReactNode
  onClose?: () => void
}
