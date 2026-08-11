import type { TypographyProperties } from '../interfaces.js'
import type { fontSizes }            from '../font-sizes.js'
import type { fontWeights }          from '../font-weights.js'
import type { letterSpacings }       from '../letter-spacings.js'
import type { lineHeights }          from '../line-heights.js'

import { scienceGothicFontFamily }   from '../font-faces.js'

type FontSizeValue = (typeof fontSizes)[keyof typeof fontSizes]

type LineHeightValue = (typeof lineHeights)[keyof typeof lineHeights]

type FontWeightValue = (typeof fontWeights)[keyof typeof fontWeights]

type LetterSpacingValue = (typeof letterSpacings)[keyof typeof letterSpacings]

export const createTypographyStyle = (
  fontSize: FontSizeValue,
  lineHeight: LineHeightValue,
  fontWeight: FontWeightValue,
  letterSpacing: LetterSpacingValue
): TypographyProperties => ({
  fontFamily: scienceGothicFontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
})
