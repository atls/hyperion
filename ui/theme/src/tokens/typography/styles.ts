import type { FontSizeValue }      from './interfaces.js'
import type { FontWeightValue }    from './interfaces.js'
import type { LetterSpacingValue } from './interfaces.js'
import type { LineHeightValue }    from './interfaces.js'
import type { TypographyStyle }    from './interfaces.js'

import { scienceGothicFontFamily } from './font-faces.js'
import { fontSizes }               from './font-sizes.js'
import { fontWeights }             from './font-weights.js'
import { letterSpacings }          from './letter-spacings.js'
import { lineHeights }             from './line-heights.js'

const createTextStyle = (
  fontSize: FontSizeValue,
  lineHeight: LineHeightValue,
  fontWeight: FontWeightValue,
  letterSpacing: LetterSpacingValue
): TypographyStyle => ({
  fontFamily: scienceGothicFontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
})

export const textStyles = {
  display: {
    lg: createTextStyle(fontSizes.xl6, lineHeights.xl4, fontWeights.semiBold, letterSpacings.md),
    md: createTextStyle(fontSizes.xl5, lineHeights.xl3, fontWeights.semiBold, letterSpacings.md),
    sm: createTextStyle(fontSizes.xl4, lineHeights.xl2, fontWeights.semiBold, letterSpacings.md),
  },
  heading: {
    lg: createTextStyle(fontSizes.xl3, lineHeights.xl, fontWeights.medium, letterSpacings.md),
    md: createTextStyle(fontSizes.xl2, lineHeights.lg, fontWeights.medium, letterSpacings.md),
    sm: createTextStyle(fontSizes.xl, lineHeights.md, fontWeights.medium, letterSpacings.md),
  },
  title: {
    lg: createTextStyle(fontSizes.lg, lineHeights.sm, fontWeights.medium, letterSpacings.md),
    md: createTextStyle(fontSizes.md, lineHeights.sm, fontWeights.medium, letterSpacings.md),
  },
  body: {
    lg: createTextStyle(fontSizes.md, lineHeights.sm, fontWeights.regular, letterSpacings.md),
    md: createTextStyle(fontSizes.sm, lineHeights.xs, fontWeights.regular, letterSpacings.md),
    sm: createTextStyle(fontSizes.xs, lineHeights.xs2, fontWeights.regular, letterSpacings.md),
  },
  label: {
    lg: createTextStyle(fontSizes.md, lineHeights.xs, fontWeights.medium, letterSpacings.lg),
    md: createTextStyle(fontSizes.sm, lineHeights.xs, fontWeights.medium, letterSpacings.lg),
    sm: createTextStyle(fontSizes.xs, lineHeights.xs2, fontWeights.medium, letterSpacings.lg),
  },
  caption: createTextStyle(fontSizes.xs2, lineHeights.xs2, fontWeights.regular, letterSpacings.xl),
  overline: createTextStyle(fontSizes.xs3, lineHeights.xs3, fontWeights.medium, letterSpacings.xl),
} as const
