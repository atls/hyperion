import { keyframes } from '@vanilla-extract/css'
export const forward = keyframes({
  from: { left: '-30%', width: '30%' },
  to: { left: '100%', width: '30%' },
})
export const backward = keyframes({
  from: { left: '100%', width: '20%' },
  to: { left: '-20%', width: '20%' },
})
