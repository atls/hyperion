export const animations = {
  duration: {
    none: '0ms',
    xs: '80ms',
    sm: '120ms',
    md: '200ms',
    lg: '300ms',
  },
  loopDuration: {
    sm: 1500,
    md: 5000,
  },
  curves: {
    smooth: [0.45, 0, 0.55, 1],
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
