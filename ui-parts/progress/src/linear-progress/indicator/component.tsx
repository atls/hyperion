import type { ReactNode }               from 'react'

import type { LinearAnimationSegment }  from './animation/interfaces.js'
import type { LinearProgressAnimation } from './animation/interfaces.js'
import type { IndicatorAppearance }     from './styles/appearance/interfaces.js'
import type { IndicatorShape }          from './styles/shape/interfaces.js'

import { useRef }                       from 'react'

import { useAnimation }                 from './animation/use-animation.js'
import { indicatorStyles }              from './styles/base.css.js'

const AnimatedSegment = ({
  shape,
  appearance,
  animation,
  segment,
}: {
  shape: IndicatorShape
  appearance: IndicatorAppearance
  animation: LinearProgressAnimation
  segment: LinearAnimationSegment
}): ReactNode => {
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

export const Indicator = ({
  shape,
  appearance,
  value,
  animation,
}: {
  shape: IndicatorShape
  appearance: IndicatorAppearance
  value?: number
  animation: LinearProgressAnimation
}): ReactNode => {
  if (value === undefined)
    return animation.segments.map((segment) => (
      <AnimatedSegment
        key={segment.id}
        shape={shape}
        appearance={appearance}
        animation={animation}
        segment={segment}
      />
    ))
  return (
    <div
      aria-hidden='true'
      className={indicatorStyles}
      style={{
        width: `${value}%`,
        height: shape.height,
        borderRadius: shape.borderRadius,
        background: appearance.background,
        boxShadow: appearance.boxShadow,
        transition: `width ${animation.duration} ${animation.easing ?? 'linear'}`,
      }}
    />
  )
}
