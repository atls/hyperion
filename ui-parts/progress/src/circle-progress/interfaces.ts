import type { CSSProperties }            from 'react'
import type { HTMLAttributes }           from 'react'
import type { ReactNode }                from 'react'

import type { CircleProgressAppearance } from './styles/appearance/interfaces.js'
import type { CircleProgressShape }      from './styles/shape/interfaces.js'

export type CircleProgressAnimation =

    | 'orbit'
    | 'spinner'
    | {
        variant: 'orbit' | 'spinner'
        duration?: CSSProperties['animationDuration']
        easing?: CSSProperties['animationTimingFunction']
      }

export interface CircleProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  value?: number
  shape?: CircleProgressShape
  appearance?: CircleProgressAppearance | 'primary' | 'secondary'
  animation?: CircleProgressAnimation
  children?: ReactNode
}
