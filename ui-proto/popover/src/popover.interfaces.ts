import { ReactElement } from 'react'

import { TooltipProps } from '@atls-ui-parts/tooltip'

export interface PopoverProps extends TooltipProps {
  title?: string
  content?: ReactElement
}
