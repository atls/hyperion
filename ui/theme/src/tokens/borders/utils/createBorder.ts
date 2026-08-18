import type { BorderStyle } from '../interfaces.js'
import type { BorderWidth } from '../interfaces.js'

export const createBorder = (width: BorderWidth, style: BorderStyle, color: string): string =>
  `${width} ${style} ${color}`
