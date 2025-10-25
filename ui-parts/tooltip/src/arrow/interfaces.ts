import type { FloatingArrowProps } from '@floating-ui/react'
import type { UseFloatingReturn }  from '@floating-ui/react'
import type { RefObject }          from 'react'

export interface ArrowProps {
  ref: RefObject<SVGSVGElement | null>
  arrow?: Omit<FloatingArrowProps, 'context'> | boolean
  context: UseFloatingReturn['context']
}
