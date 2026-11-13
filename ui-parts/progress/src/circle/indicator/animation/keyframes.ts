import type { SegmentFrame } from './interfaces.js'

import { assignInlineVars }  from '@vanilla-extract/dynamic'

export const getSegmentKeyframes = (
  frames: ReadonlyArray<SegmentFrame>,
  variables: { start: string; length: string },
  easing = 'linear'
): Array<Keyframe> => {
  const keyframes = frames.map(({ at, start, end }) => ({
    offset: at,
    easing,
    ...assignInlineVars({
      [variables.start]: String(start),
      [variables.length]: String(end - start),
    }),
  }))
  if (!keyframes.length) return getSegmentKeyframes([{ at: 0, start: 0, end: 0 }], variables)
  if (keyframes[0].offset > 0) keyframes.unshift({ ...keyframes[0], offset: 0 })
  if (keyframes[keyframes.length - 1].offset < 1)
    keyframes.push({ ...keyframes[keyframes.length - 1], offset: 1 })
  return keyframes
}
