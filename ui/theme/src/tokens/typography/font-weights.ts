export const fontWeights = {
  thin: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
} as const

export type FontWeightsTokens = typeof fontWeights
