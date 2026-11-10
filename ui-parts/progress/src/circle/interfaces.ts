import type { HTMLAttributes }           from 'react'
import type { ReactNode }                from 'react'

import type { CircleProgressAnimation }  from './indicator/animation/interfaces.js'
import type { CircleProgressAppearance } from './styles/appearance/interfaces.js'
import type { CircleProgressShape }      from './styles/shape/interfaces.js'

export interface CircleProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  value?: number
  shape?: CircleProgressShape
  appearance?: CircleProgressAppearance | 'primary' | 'secondary'
  animation?: CircleProgressAnimation
  children?: ReactNode
}
