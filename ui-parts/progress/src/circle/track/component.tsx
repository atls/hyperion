import type { ReactNode }      from 'react'
import type { CSSProperties }  from 'react'

import type { IndicatorShape } from '../indicator/styles/shape/interfaces.js'

export const Track = ({
  inset,
  radius,
  strokeWidth,
  color,
}: {
  inset: CSSProperties['inset']
  radius: string
  strokeWidth: IndicatorShape['strokeWidth']
  color: string
}): ReactNode => (
  <div
    aria-hidden='true'
    style={{
      position: 'absolute',
      inset,
      borderRadius: radius,
      outline: `${typeof strokeWidth === 'number' ? `${strokeWidth}px` : strokeWidth} solid ${color}`,
      outlineOffset: `calc(${typeof strokeWidth === 'number' ? `${strokeWidth}px` : strokeWidth} / -2)`,
      boxSizing: 'border-box',
      pointerEvents: 'none',
    }}
  />
)
