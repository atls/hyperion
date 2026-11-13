import type { ReactNode }            from 'react'

import type { AnimatedSegmentProps } from './interfaces.js'

import { useRef }                    from 'react'

import { useAnimation }              from '../animation/useAnimation.js'
import { indicatorStyles }           from '../styles/base.css.js'

export const AnimatedSegment = ({
  shape,
  appearance,
  animation,
  segment,
}: AnimatedSegmentProps): ReactNode => {
  const ref = useRef<HTMLDivElement>(null)
  useAnimation(ref, animation, segment)
  const frame = segment.frames.at(0)
  if (!frame) return null
  return (
    <div
      ref={ref}
      aria-hidden='true'
      className={indicatorStyles}
      style={{
        left: `${frame.start * 100}%`,
        width: `${(frame.end - frame.start) * 100}%`,
        height: shape.height,
        borderRadius: shape.borderRadius,
        background: appearance.background,
        boxShadow: appearance.boxShadow,
      }}
    />
  )
}
