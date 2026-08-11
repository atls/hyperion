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
    lg: createTypographyStyle({
      fontSize: fontSizes.xl6,
      lineHeight: lineHeights.xl4,
      fontWeight: fontWeights.semiBold,
      letterSpacing: letterSpacings.md,
    }),
    md: createTypographyStyle({
      fontSize: fontSizes.xl5,
      lineHeight: lineHeights.xl3,
      fontWeight: fontWeights.semiBold,
      letterSpacing: letterSpacings.md,
    }),
    sm: createTypographyStyle({
      fontSize: fontSizes.xl4,
      lineHeight: lineHeights.xl2,
      fontWeight: fontWeights.semiBold,
      letterSpacing: letterSpacings.md,
    }),
  },
  heading: {
    lg: createTypographyStyle({
      fontSize: fontSizes.xl3,
      lineHeight: lineHeights.xl,
      fontWeight: fontWeights.medium,
      letterSpacing: letterSpacings.md,
    }),
    md: createTypographyStyle({
      fontSize: fontSizes.xl2,
      lineHeight: lineHeights.lg,
      fontWeight: fontWeights.medium,
      letterSpacing: letterSpacings.md,
    }),
    sm: createTypographyStyle({
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.md,
      fontWeight: fontWeights.medium,
      letterSpacing: letterSpacings.md,
    }),
  },
  title: {
    lg: createTypographyStyle({
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.sm,
      fontWeight: fontWeights.medium,
      letterSpacing: letterSpacings.md,
    }),
    md: createTypographyStyle({
      fontSize: fontSizes.md,
      lineHeight: lineHeights.sm,
      fontWeight: fontWeights.medium,
      letterSpacing: letterSpacings.md,
    }),
  },
  body: {
    lg: createTypographyStyle({
      fontSize: fontSizes.md,
      lineHeight: lineHeights.sm,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacings.md,
    }),
    md: createTypographyStyle({
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.xs,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacings.md,
    }),
    sm: createTypographyStyle({
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs2,
      fontWeight: fontWeights.regular,
      letterSpacing: letterSpacings.md,
    }),
  },
  label: {
    lg: createTypographyStyle({
      fontSize: fontSizes.md,
      lineHeight: lineHeights.xs,
      fontWeight: fontWeights.medium,
      letterSpacing: letterSpacings.lg,
    }),
    md: createTypographyStyle({
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.xs,
      fontWeight: fontWeights.medium,
      letterSpacing: letterSpacings.lg,
    }),
    sm: createTypographyStyle({
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs2,
      fontWeight: fontWeights.medium,
      letterSpacing: letterSpacings.lg,
    }),
  },
  caption: createTypographyStyle({
    fontSize: fontSizes.xs2,
    lineHeight: lineHeights.xs2,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.xl,
  }),
  overline: createTypographyStyle({
    fontSize: fontSizes.xs3,
    lineHeight: lineHeights.xs3,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacings.xl,
  }),
} as const

export type TypographyTokens = typeof typography
