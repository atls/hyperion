import type { TooltipProps } from '@atls-ui-parts/tooltip'
import type { ReactElement } from 'react'

export interface PopoverProps extends Omit<TooltipProps, 'text'> {
  content?: ReactElement
  title?: string
}
