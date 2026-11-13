import type { ReactNode }      from 'react'

import type { IndicatorShape } from '../indicator/styles/shape/interfaces.js'
import type { ContourStyles }  from '../styles/shape/interfaces.js'

export const Track = ({
  contour,
  strokeWidth,
  color,
}: {
  contour: ContourStyles
  strokeWidth: IndicatorShape['strokeWidth']
  color: string
}): ReactNode => (
  <svg
    aria-hidden='true'
    width='100%'
    height='100%'
    style={{ position: 'absolute', inset: 0, display: 'block', overflow: 'visible' }}
  >
    <rect fill='none' stroke={color} strokeWidth={strokeWidth} style={contour} />
  </svg>
)
