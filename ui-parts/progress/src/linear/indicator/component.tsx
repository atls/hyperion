import type { ReactNode }              from 'react'

import type { IndicatorProps }         from './interfaces.js'

import { assignInlineVars }            from '@vanilla-extract/dynamic'

import { AnimatedSegment }             from './segment/component.js'
import { indicatorTransitionDuration } from './styles/base.css.js'
import { indicatorStyles }             from './styles/base.css.js'

export const Indicator = ({ shape, appearance, value, animation }: IndicatorProps): ReactNode => {
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
        ...assignInlineVars({ [indicatorTransitionDuration]: animation.duration }),
        transitionTimingFunction: animation.easing ?? 'linear',
      }}
    />
  )
}
