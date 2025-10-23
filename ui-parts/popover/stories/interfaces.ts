import type { PopoverProps }      from '@atls-ui-parts/popover'
import type { PropsWithChildren } from 'react'
import type { ReactNode }         from 'react'

export interface StoryPopoverProps
  extends Pick<PopoverProps, 'animated' | 'arrow' | 'offset' | 'placement' | 'trigger'> {
  customContainer: boolean
}

export interface StoryPopoverContainerProps extends PropsWithChildren {
  title?: string
  content?: ReactNode
  onClose?: () => void
}
