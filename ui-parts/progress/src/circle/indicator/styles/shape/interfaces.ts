import type { CSSProperties } from 'react'

export interface IndicatorShape {
  overlap?: number
  strokeWidth: NonNullable<CSSProperties['strokeWidth']>
}
