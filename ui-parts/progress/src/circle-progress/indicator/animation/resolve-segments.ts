import type { ContourInterval }         from '../contour/interfaces.js'
import type { CircleProgressAnimation } from './interfaces.js'

import { INTERVAL_TOLERANCE }           from './constants.js'

export const mergeIntervals = (
  intervals: ReadonlyArray<ContourInterval>
): Array<ContourInterval> => {
  const pieces: Array<ContourInterval> = []
  for (const interval of intervals) {
    const length = interval.end - interval.start
    if (length <= INTERVAL_TOLERANCE) continue
    if (length >= 1 - INTERVAL_TOLERANCE) return [{ start: 0, end: 1 }]
    const start = ((interval.start % 1) + 1) % 1
    const end = start + length
    pieces.push({ start, end: Math.min(end, 1) })
    if (end > 1) pieces.push({ start: 0, end: end - 1 })
  }
  pieces.sort((a, b) => a.start - b.start)
  const merged: Array<ContourInterval> = []
  for (const piece of pieces) {
    const last = merged.at(-1)
    if (last && piece.start <= last.end + INTERVAL_TOLERANCE)
      last.end = Math.max(last.end, piece.end)
    else merged.push({ ...piece })
  }
  const first = merged[0]
  const last = merged[merged.length - 1]
  if (
    merged.length > 1 &&
    first.start <= INTERVAL_TOLERANCE &&
    last.end >= 1 - INTERVAL_TOLERANCE
  ) {
    merged.pop()
    merged.shift()
    merged.push({ start: last.start, end: 1 + first.end })
  }
  return merged
}

export const resolveAnimationSegments = (
  animation: CircleProgressAnimation,
  phase: number,
  ease: (progress: number) => number
): Array<ContourInterval> => {
  const intervals: Array<ContourInterval> = []
  for (const { frames } of animation.segments) {
    if (!frames.length) continue
    let start = frames[0]
    let end = start
    for (const frame of frames) {
      end = frame
      if (frame.at >= phase) break
      start = frame
    }
    const progress =
      end.at === start.at
        ? 0
        : ease(Math.max(0, Math.min(1, (phase - start.at) / (end.at - start.at))))
    intervals.push({
      start: start.start + (end.start - start.start) * progress,
      end: start.end + (end.end - start.end) * progress,
    })
  }
  return mergeIntervals(intervals)
}
