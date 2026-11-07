import type { IndicatorShape } from './interfaces.js'

export const indicatorShapes = {
  xs2: { strokeWidth: 1 },
  xs: { strokeWidth: 2 },
  sm: { strokeWidth: 2 },
  md: { strokeWidth: 2.5 },
  lg: { strokeWidth: 3 },
  xl: { strokeWidth: 4 },
} satisfies Record<string, IndicatorShape>
