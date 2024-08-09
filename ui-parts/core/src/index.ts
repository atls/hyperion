import { createStitches } from '@stitches/react'

export const { styled, css, theme } = createStitches({
  theme: {
    colors: {
      white: 'rgb(255,255,255)',
      black: 'rgb(0,0,0)',
    },
    space: {},
    fontSizes: {
      atomic: 10,
      normal: 12,
      regular: 14,
      extra: 16,
      medium: 18,
      increased: 20,
      large: 26,
      huge: 32,
    },
    fonts: {
      primary: '"Noto Sans", apple-system, sans-serif',
    },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
})
