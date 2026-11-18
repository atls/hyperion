import { keyframes } from '@vanilla-extract/css'

export const spinner = keyframes({
  from: { strokeDasharray: '0.25 0.75', strokeDashoffset: 0.25 },
  to: { strokeDasharray: '0.25 0.75', strokeDashoffset: 1.25 },
})

export const orbitLeading = keyframes({
  'from, to': { strokeDasharray: '0.18 0.82', strokeDashoffset: 1 },
  '50%': { strokeDasharray: '0.18 0.82', strokeDashoffset: 1.5 },
})

export const orbitTrailing = keyframes({
  from: { strokeDasharray: '0.18 0.82', strokeDashoffset: 1.18 },
  '50%': { strokeDasharray: '0.18 0.82', strokeDashoffset: 1.68 },
  to: { strokeDasharray: '0.18 0.82', strokeDashoffset: 2.18 },
})
