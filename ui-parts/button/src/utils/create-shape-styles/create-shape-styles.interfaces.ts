import type { CSSProperties } from 'react'

export interface ButtonShapeStyles {
  size: number | string
  fontFamily?: CSSProperties['fontFamily']
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
  rounding?: CSSProperties['borderRadius']
  paddingLeft?: CSSProperties['paddingLeft']
  paddingRight?: CSSProperties['paddingRight']
  paddingRatio?: number
}
