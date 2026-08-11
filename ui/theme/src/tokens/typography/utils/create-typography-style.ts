import type { TypographyProperties } from '../interfaces.js'
import type { FontSizeValue }        from './interfaces.js'
import type { FontWeightValue }      from './interfaces.js'
import type { LetterSpacingValue }   from './interfaces.js'
import type { LineHeightValue }      from './interfaces.js'

import { scienceGothicFontFamily }   from '../font-faces.js'

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
