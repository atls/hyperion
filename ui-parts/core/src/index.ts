import { createStitches } from '@stitches/react'

export const { styled, css, theme } = createStitches({
  theme: {
    colors: {
      black: 'rgb(0,0,0)',
      blue: 'rgb(102,186,255)',
      white: 'rgb(255,255,255)',
    },
    space: {},
    fontSizes: {
      atomic: 10,
      regular: 14,
      normal: 12,
      extra: 16,
      medium: 18,
      increased: 20,
      large: 26,
      huge: 32,
    },
    fonts: {
      primary: 'Verdana, Arial, Helvetica, sans-serif',
    },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderStyles: {},
    borderWidths: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
})
