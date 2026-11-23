export const fontSizes = {
  xs6: '5px',
  xs5: '6px',
  xs4: '8px',
  xs3: '10px',
  xs2: '11px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  xl2: '24px',
  xl3: '28px',
  xl4: '32px',
  xl5: '40px',
  xl6: '48px',
} as const

export type FontSizesTokens = typeof fontSizes
