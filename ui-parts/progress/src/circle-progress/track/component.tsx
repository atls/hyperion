import type { ReactNode }     from 'react'
import type { CSSProperties } from 'react'

export const Track = ({
  inset,
  radius,
  strokeWidth,
  color,
}: {
  inset: CSSProperties['inset']
  radius: number
  strokeWidth: number
  color: string
}): ReactNode => (
  <div
    aria-hidden='true'
    style={{
      position: 'absolute',
      inset,
      borderRadius: radius,
      outline: `${strokeWidth}px solid ${color}`,
      outlineOffset: -strokeWidth / 2,
      boxSizing: 'border-box',
      pointerEvents: 'none',
    }}
  />
)
