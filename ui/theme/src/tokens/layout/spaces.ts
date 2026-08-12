export const spacing = {
  component: {
    none: '0',
    xs2: '2px',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xl2: '20px',
    xl3: '24px',
    xl4: '32px',
  },
  layout: {
    xs2: '40px',
    xs: '48px',
    sm: '64px',
    md: '80px',
    lg: '96px',
    xl: '128px',
  },
} as const

export type SpacingTokens = typeof spacing
