// TODO: Remove legacy typography tokens after components are refactored to @atls-ui/theme typography.
export type FontWeightsTokens = Record<keyof typeof fontWeightsContract, string>

export const fontWeightsContract = {
  inherit: null,
  light: null,
  regular: null,
  medium: null,
  bold: null,
}
