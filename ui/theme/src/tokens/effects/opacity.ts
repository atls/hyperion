export const opacity = {
  none: 0,
  xs2: 0.04,
  xs: 0.08,
  sm: 0.12,
  md: 0.16,
  lg: 0.24,
  xl: 0.4,
  xl2: 0.64,
  xl3: 0.8,
  full: 1,
} as const

export type OpacityTokens = typeof opacity
