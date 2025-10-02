import type { OffsetOptions }         from '@floating-ui/react'
import type { Placement }             from '@floating-ui/react'
import type { UseDismissProps }       from '@floating-ui/react'
import type { UseRoleProps }          from '@floating-ui/react'
import type { UseFloatingReturn }     from '@floating-ui/react'
import type { UseFloatingOptions }    from '@floating-ui/react'
import type { UseInteractionsReturn } from '@floating-ui/react'
import type { Strategy }              from '@floating-ui/react'
import type { RefObject }             from 'react'

export type Trigger = 'click' | 'hover'

export interface UseFloatProps {
  open?: boolean
  onOpenChange?: UseFloatingOptions['onOpenChange']
  transform?: boolean
  placement?: Placement
  strategy?: Strategy
  offset?: OffsetOptions
  trigger?: Trigger
  triggerOnFocus?: boolean
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  dismiss?: UseDismissProps
  role?: UseRoleProps['role']
}

export interface UseFloatReturn extends UseFloatingReturn {
  arrowRef: RefObject<SVGSVGElement | null>
  isOpen: boolean
  getReferenceProps: UseInteractionsReturn['getReferenceProps']
  getFloatingProps: UseInteractionsReturn['getFloatingProps']
}
