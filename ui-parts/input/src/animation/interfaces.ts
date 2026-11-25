import type { CSSProperties } from 'react'
export interface InputTransition {
  duration: NonNullable<CSSProperties['transitionDuration']>
  easing: NonNullable<CSSProperties['transitionTimingFunction']>
}
export interface InputAnimation {
  unfilled: InputTransition
  filled: InputTransition
  hover: InputTransition
  focused: InputTransition
  loading: InputTransition
}
