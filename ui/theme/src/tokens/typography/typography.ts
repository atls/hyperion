import { scienceGothicFontFaces }  from './font-faces.js'
import { scienceGothicFontFamily } from './font-faces.js'
import { fontSizes }               from './font-sizes.js'
import { fontWeights }             from './font-weights.js'
import { letterSpacings }          from './letter-spacings.js'
import { lineHeights }             from './line-heights.js'
import { textStyles }              from './styles.js'

export const typography = {
  fontFamily: scienceGothicFontFamily,
  fontFaces: scienceGothicFontFaces,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  textStyles,
} as const

export type TypographyTokens = typeof typography
