import type { CSSProperties } from 'react'

export interface LinearProgressAnimation {
  duration: `${number}ms` | `${number}s`
  easing?: CSSProperties['animationTimingFunction']
  segments: ReadonlyArray<string>
}
