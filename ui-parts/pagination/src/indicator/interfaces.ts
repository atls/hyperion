import type { CSSProperties }            from 'react'

import type { ItemShape }                from '../item/styles/shape/interfaces.js'
import type { PaginationAnimation }      from './animation/interfaces.js'
import type { PaginationAnimationPhase } from './animation/interfaces.js'

export interface IndicatorProps {
  animation: PaginationAnimation
  phase: PaginationAnimationPhase
  distance: number
  direction: number
  background: CSSProperties['background']
  borderColor?: CSSProperties['borderColor']
  shape: ItemShape
  className?: string
}
