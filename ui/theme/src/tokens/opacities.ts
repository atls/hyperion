export const opacities = {
  transparent: 0,
  disabled: 0.5,
  visible: 1,
} as const

export type OpacitiesTokens = typeof opacities
