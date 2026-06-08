export const zIndex = {
  base: 0,
  raised: 1,
  overlay: 1000,
  modal: 2000,
} as const

export type ZIndexTokens = typeof zIndex
