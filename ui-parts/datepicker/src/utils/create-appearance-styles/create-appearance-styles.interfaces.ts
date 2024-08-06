import { CSSProperties } from 'react'

export type CSSColor = CSSProperties['color']

export interface AppearanceStyles {
  arrowColor?: CSSColor
  arrowHoverColor?: CSSColor
  cellColor?: CSSColor
  cellFontColor?: CSSColor
  cellActiveColor?: CSSColor
  cellActiveFontColor?: CSSColor
  cellHoverColor?: CSSColor
  cellHoverFontColor?: CSSColor
  cellInRangeColor?: CSSColor
  cellInRangeFontColor?: CSSColor
  cellInRangeHoverColor?: CSSColor
  cellInRangeHoverFontColor?: CSSColor
  currentMonthFontColor?: CSSColor
  dividerColor?: CSSColor
  headerBackgroundColor?: CSSColor
  inputBackgroundColor?: CSSColor
  inputBorderColor?: CSSColor
  inputActiveBorderColor?: CSSColor
  dayNameFontColor?: CSSColor
  withBaseStyle?: boolean
}
