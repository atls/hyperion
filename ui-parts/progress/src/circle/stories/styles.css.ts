import { keyframes }          from '@vanilla-extract/css'

import { ARC_DASH_ARRAY }     from './constants.js'
import { THREE_ARCS_OFFSETS } from './constants.js'

const arc = (from: number, to: number): string =>
  keyframes({
    from: { strokeDasharray: ARC_DASH_ARRAY, strokeDashoffset: from },
    to: { strokeDasharray: ARC_DASH_ARRAY, strokeDashoffset: to },
  })
export const threeArcs = THREE_ARCS_OFFSETS.map(([from, to]) => arc(from, to))
