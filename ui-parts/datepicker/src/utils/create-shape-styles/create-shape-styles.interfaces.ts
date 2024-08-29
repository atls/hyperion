import type { CSSProperties } from 'react'

export interface ShapeStyles {
  dividerPosition?: 'bottom' | 'middle' | 'none'
  dividerWidth?: number | string
  cellMargin?: number | string
  cellPadding?: number | string
  cellBorderRadius?: number | string
  cellInRangeBorderRadius?: number | string
  fontSize?: number | string
  fontFamily?: string
  fontStyle?: string
  fontWeight?: CSSProperties['fontWeight']
  inputSize?: number
  inputBorderWidth?: number | string
  inputBorderRadius?: number | string
  inputPadding?: number | string
  dayNameFontFamily?: string
  dayNameFontStyle?: string
  dayNameFontWeight?: CSSProperties['fontWeight']
  dayNameFontSize?: number | string
  currentMonthPadding?: number | string
  currentMonthFontFamily?: string
  currentMonthFontWeight?: CSSProperties['fontWeight']
  currentMonthFontStyle?: string
  currentMonthFontSize?: number | string
}
