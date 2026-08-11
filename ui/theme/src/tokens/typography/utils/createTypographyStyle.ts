import type { TypographyProperties }   from '../interfaces.js'
import type { TypographyStyleOptions } from './interfaces.js'

import { scienceGothicFontFamily }     from '../fontFaces.js'

export const createTypographyStyle = ({
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
}: TypographyStyleOptions): TypographyProperties => ({
  fontFamily: scienceGothicFontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
})
