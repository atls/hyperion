export const lineHeights = {
  xs6: '7px',
  xs5: '8px',
  xs4: '10px',
  xs3: '12px',
  xs2: '16px',
  xs: '20px',
  sm: '24px',
  md: '28px',
  lg: '32px',
  xl: '36px',
  xl2: '40px',
  xl3: '48px',
  xl4: '56px',
} as const

export type LineHeightsTokens = typeof lineHeights
