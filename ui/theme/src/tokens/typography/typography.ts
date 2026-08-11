import { scienceGothicFontFaces }  from './fontFaces.js'
import { scienceGothicFontFamily } from './fontFaces.js'
import { fontSizes }               from './fontSizes.js'
import { fontWeights }             from './fontWeights.js'
import { letterSpacings }          from './letterSpacings.js'
import { lineHeights }             from './lineHeights.js'
import { createTypographyStyle }   from './utils/index.js'

export const typography = {
  fontFamily: scienceGothicFontFamily,
  fontFaces: scienceGothicFontFaces,
  display: {
    lg: createTypographyStyle(
      fontSizes.xl6,
      lineHeights.xl4,
      fontWeights.semiBold,
      letterSpacings.md
    ),
    md: createTypographyStyle(
      fontSizes.xl5,
      lineHeights.xl3,
      fontWeights.semiBold,
      letterSpacings.md
    ),
    sm: createTypographyStyle(
      fontSizes.xl4,
      lineHeights.xl2,
      fontWeights.semiBold,
      letterSpacings.md
    ),
  },
  heading: {
    lg: createTypographyStyle(fontSizes.xl3, lineHeights.xl, fontWeights.medium, letterSpacings.md),
    md: createTypographyStyle(fontSizes.xl2, lineHeights.lg, fontWeights.medium, letterSpacings.md),
    sm: createTypographyStyle(fontSizes.xl, lineHeights.md, fontWeights.medium, letterSpacings.md),
  },
  title: {
    lg: createTypographyStyle(fontSizes.lg, lineHeights.sm, fontWeights.medium, letterSpacings.md),
    md: createTypographyStyle(fontSizes.md, lineHeights.sm, fontWeights.medium, letterSpacings.md),
  },
  body: {
    lg: createTypographyStyle(fontSizes.md, lineHeights.sm, fontWeights.regular, letterSpacings.md),
    md: createTypographyStyle(fontSizes.sm, lineHeights.xs, fontWeights.regular, letterSpacings.md),
    sm: createTypographyStyle(
      fontSizes.xs,
      lineHeights.xs2,
      fontWeights.regular,
      letterSpacings.md
    ),
  },
  label: {
    lg: createTypographyStyle(fontSizes.md, lineHeights.xs, fontWeights.medium, letterSpacings.lg),
    md: createTypographyStyle(fontSizes.sm, lineHeights.xs, fontWeights.medium, letterSpacings.lg),
    sm: createTypographyStyle(fontSizes.xs, lineHeights.xs2, fontWeights.medium, letterSpacings.lg),
  },
  caption: createTypographyStyle(
    fontSizes.xs2,
    lineHeights.xs2,
    fontWeights.regular,
    letterSpacings.xl
  ),
  overline: createTypographyStyle(
    fontSizes.xs3,
    lineHeights.xs3,
    fontWeights.medium,
    letterSpacings.xl
  ),
} as const

export type TypographyTokens = typeof typography
