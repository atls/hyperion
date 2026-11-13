import type { CSSProperties } from 'react'

export interface LinearAnimationFrame {
  at: number
  start: number
  end: number
}

export interface LinearAnimationSegment {
  id: string
  frames: ReadonlyArray<LinearAnimationFrame>
}

export interface LinearProgressAnimation {
  duration: `${number}ms` | `${number}s`
  easing?: CSSProperties['animationTimingFunction']
  segments: ReadonlyArray<LinearAnimationSegment>
}
