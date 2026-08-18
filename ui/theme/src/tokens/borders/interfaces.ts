import type { borderStyles } from './constants.js'
import type { borderWidths } from './constants.js'

export type BorderStyle = (typeof borderStyles)[keyof typeof borderStyles]
export type BorderWidth = (typeof borderWidths)[keyof typeof borderWidths]

export interface BorderStates {
  default: string
  hover: string
  focused: string
  disabled: string
}

export interface PressableBorderStates extends BorderStates {
  pressed: string
}

export interface BordersTokens {
  neutral: PressableBorderStates
  action: PressableBorderStates
  danger: PressableBorderStates
  dropzone: BorderStates
}
