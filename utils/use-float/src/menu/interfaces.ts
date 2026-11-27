import type { Placement }                from '@floating-ui/react'
import type { UseFloatingReturn }        from '@floating-ui/react'
import type { UseTransitionStylesProps } from '@floating-ui/react'
import type { ReactNode }                from 'react'
export type FloatingMenuAnimation = UseTransitionStylesProps
export interface UseFloatingMenuProps {
  open: boolean
  placement?: Placement
  offset?: number
  animation?: FloatingMenuAnimation
  className?: string
}
export interface UseFloatingMenuReturn extends Pick<UseFloatingReturn, 'refs'> {
  renderMenu: (content: ReactNode) => ReactNode
}
