import { keyframes } from '@vanilla-extract/css'
const arc = (from: number, to: number): string =>
  keyframes({
    from: { strokeDasharray: '0.1 0.9', strokeDashoffset: from },
    to: { strokeDasharray: '0.1 0.9', strokeDashoffset: to },
  })
export const threeArcs = [arc(0.1, 1.1), arc(0.5, 1.5), arc(0.9, 1.9)]
