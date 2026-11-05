export const animations = {
  duration: {
    none: '0ms',
    xs: '80ms',
    sm: '120ms',
    md: '200ms',
    lg: '300ms',
  },
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const

export type AnimationsTokens = typeof animations
