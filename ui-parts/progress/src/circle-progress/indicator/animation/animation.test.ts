import type { ContourInterval }         from '../contour/interfaces.js'
import type { CircleProgressAnimation } from './interfaces.js'

import assert                           from 'node:assert/strict'
import { describe }                     from 'node:test'
import { it }                           from 'node:test'

import { contourPath }                  from '../contour/path.js'
import { resolveAnimationSegments }     from './resolve-segments.js'
import { mergeIntervals }               from './resolve-segments.js'
import { circleProgressAnimations }     from './variants.js'

const linear = (value: number): number => value
const rounded = (intervals: ReadonlyArray<ContourInterval>) =>
  intervals.map(({ start, end }) => ({
    start: Number(start.toFixed(6)),
    end: Number(end.toFixed(6)),
  }))

describe('circle progress animation contract', () => {
  it('keeps orbit joined while moving clockwise and splits it in the return phase', () => {
    assert.deepEqual(rounded(resolveAnimationSegments(circleProgressAnimations.orbit, 0, linear)), [
      { start: 0.82, end: 1.18 },
    ])
    assert.deepEqual(
      rounded(resolveAnimationSegments(circleProgressAnimations.orbit, 0.25, linear)),
      [{ start: 0.07, end: 0.43 }]
    )
    assert.deepEqual(
      rounded(resolveAnimationSegments(circleProgressAnimations.orbit, 0.5, linear)),
      [{ start: 0.32, end: 0.68 }]
    )
    assert.deepEqual(
      rounded(resolveAnimationSegments(circleProgressAnimations.orbit, 0.75, linear)),
      [
        { start: 0.07, end: 0.25 },
        { start: 0.75, end: 0.93 },
      ]
    )
    assert.deepEqual(rounded(resolveAnimationSegments(circleProgressAnimations.orbit, 1, linear)), [
      { start: 0.82, end: 1.18 },
    ])
  })

  it('keeps a spinner crossing the origin as one continuous quarter of the contour', () => {
    assert.deepEqual(
      rounded(resolveAnimationSegments(circleProgressAnimations.spinner, 0.9, linear)),
      [{ start: 0.9, end: 1.15 }]
    )
    assert.deepEqual(
      rounded(resolveAnimationSegments(circleProgressAnimations.spinner, 1, linear)),
      [{ start: 0, end: 0.25 }]
    )
  })

  it('accepts a consumer animation with three independently described segments', () => {
    const animation = {
      duration: '3s',
      segments: [
        {
          frames: [
            { at: 0, start: 0, end: 0.1 },
            { at: 1, start: 1, end: 1.1 },
          ],
        },
        {
          frames: [
            { at: 0, start: 0.4, end: 0.5 },
            { at: 1, start: 1.4, end: 1.5 },
          ],
        },
        {
          frames: [
            { at: 0, start: 0.8, end: 0.9 },
            { at: 1, start: 1.8, end: 1.9 },
          ],
        },
      ],
    } satisfies CircleProgressAnimation
    assert.deepEqual(rounded(resolveAnimationSegments(animation, 0.5, linear)), [
      { start: 0.3, end: 0.4 },
      { start: 0.5, end: 0.6 },
      { start: 0.9, end: 1 },
    ])
  })

  it('merges overlapping segments across the origin before drawing', () => {
    const intervals = mergeIntervals([
      { start: 0.9, end: 1.2 },
      { start: -0.15, end: 0.05 },
    ])
    assert.deepEqual(rounded(intervals), [{ start: 0.85, end: 1.2 }])
    const path = contourPath({ x: 0, y: 0, width: 100, height: 40, radius: 20 }, intervals)
    assert.equal(path.match(/M /g)?.length, 1)
    assert.ok(!path.includes('NaN'))
  })

  it('omits empty segments and draws a full contour closed without endpoint caps', () => {
    assert.deepEqual(mergeIntervals([{ start: 0.4, end: 0.4 }]), [])
    const geometry = { x: 0, y: 0, width: 40, height: 40, radius: 20 }
    assert.equal(contourPath(geometry, []), '')
    assert.ok(contourPath(geometry, mergeIntervals([{ start: -2, end: -1 }])).endsWith(' Z'))
  })

  it('allows a segment to grow from empty and uses the supplied easing for interpolation', () => {
    const animation = {
      duration: '1s',
      segments: [
        {
          frames: [
            { at: 0, start: 0, end: 0 },
            { at: 1, start: 0, end: 1 },
          ],
        },
      ],
    } satisfies CircleProgressAnimation
    assert.deepEqual(resolveAnimationSegments(animation, 0, linear), [])
    assert.deepEqual(
      resolveAnimationSegments(animation, 0.5, () => 0.25),
      [{ start: 0, end: 0.25 }]
    )
  })
})
