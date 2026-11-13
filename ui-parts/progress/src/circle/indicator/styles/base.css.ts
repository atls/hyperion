import { createVar }                    from '@vanilla-extract/css'
import { style }                        from '@vanilla-extract/css'

import { SEGMENT_VISIBILITY_THRESHOLD } from './constants.js'

export const segmentStart = createVar({ syntax: '<number>', inherits: false, initialValue: '0' })
export const segmentLength = createVar({ syntax: '<number>', inherits: false, initialValue: '0' })

export const segmentStyles = style({
  strokeDasharray: `clamp(0, ${segmentLength}, 1) calc(1 - clamp(0, ${segmentLength}, 1))`,
  strokeDashoffset: `calc(${segmentStart} + ${segmentLength})`,
  transform: 'scaleX(-1)',
  transformBox: 'fill-box',
  transformOrigin: 'center',
  opacity: `clamp(0, calc((${segmentLength} - ${SEGMENT_VISIBILITY_THRESHOLD}) * ${1 / SEGMENT_VISIBILITY_THRESHOLD}), 1)`,
})
