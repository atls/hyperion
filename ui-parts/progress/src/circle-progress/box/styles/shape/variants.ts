import type { BoxShape } from './interfaces.js'

export const boxShapes = {
  xs2: { inset: 1, radius: 7 },
  xs: { inset: '2px 2px 1px 1px', radius: 8.5 },
  sm: { inset: 2, radius: 10 },
  md: { inset: 2, radius: 10 },
  lg: { inset: 2, radius: 12 },
  xl: { inset: 2, radius: 15 },
} satisfies Record<string, BoxShape>
