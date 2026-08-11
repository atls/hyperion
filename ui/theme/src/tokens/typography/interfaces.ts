import type { fontSizes }      from './font-sizes.js'
import type { fontWeights }    from './font-weights.js'
import type { letterSpacings } from './letter-spacings.js'
import type { lineHeights }    from './line-heights.js'
import type { textStyles }     from './styles.js'

export interface FontFace {
  fontFamily: string
  fontStyle: 'normal'
  fontWeight: FontWeightValue
  fontDisplay: 'swap'
  src: string
}

export interface TypographyStyle {
  fontFamily: string
  fontSize: FontSizeValue
  lineHeight: LineHeightValue
  fontWeight: FontWeightValue
  letterSpacing: LetterSpacingValue
}

export type FontSizeValue = (typeof fontSizes)[keyof typeof fontSizes]

export type LineHeightValue = (typeof lineHeights)[keyof typeof lineHeights]

export type FontWeightValue = (typeof fontWeights)[keyof typeof fontWeights]

export type LetterSpacingValue = (typeof letterSpacings)[keyof typeof letterSpacings]

export type TextStyles = typeof textStyles
