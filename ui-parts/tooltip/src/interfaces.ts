import type { UseFloatProps }      from '@atls-utils/use-float'
import type { HTMLAttributes }     from 'react'
import type { ReactElement }       from 'react'
import type { Ref }                from 'react'

import type { TooltipAppearance }  from './styles/appearance/interfaces.js'
import type { TooltipShape }       from './styles/shape/interfaces.js'
import type { tooltipAppearances } from './styles/appearance/variants.js'

export type TooltipPlacement =
  'bottom-end' | 'bottom-start' | 'bottom' | 'left' | 'right' | 'top-end' | 'top-start' | 'top'

export type TooltipTrigger = 'hover' | 'pressed'

export interface TooltipProps extends Pick<
  UseFloatProps,
  'mouseEnterDelay' | 'mouseLeaveDelay' | 'onOpenChange' | 'open'
> {
  children: ReactElement<HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> }>
  text: string
  placement?: TooltipPlacement
  trigger?: TooltipTrigger
  pressOpenDuration?: number
  appearance?: TooltipAppearance | keyof typeof tooltipAppearances
  shape?: TooltipShape
}
