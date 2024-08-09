import { ReactElement } from 'react'

import { TooltipProps } from '@atls-ui-parts/tooltip'

export interface PopoverProps extends Omit<TooltipProps, 'text'> {
  content?: ReactElement
  title?: string
}
