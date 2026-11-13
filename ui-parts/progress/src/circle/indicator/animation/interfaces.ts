import type { CSSProperties } from 'react'

export interface SegmentFrame {
  at: number
  start: number
  end: number
}

export interface SegmentAnimation {
  frames: ReadonlyArray<SegmentFrame>
}

export interface CircleProgressAnimation {
  duration: `${number}ms` | `${number}s`
  easing?: CSSProperties['animationTimingFunction']
  segments: ReadonlyArray<SegmentAnimation>
}
