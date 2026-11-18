import type { ReactNode }              from 'react'

import type { IndicatorProps }         from './interfaces.js'

import { assignInlineVars }            from '@vanilla-extract/dynamic'

import { indicatorTransitionDuration } from './styles/base.css.js'
import { movingStyles }                from './styles/base.css.js'
import { valueStyles }                 from './styles/base.css.js'

export const Indicator = ({ shape, appearance, value, animation }: IndicatorProps): ReactNode => {
  const style = {
    height: shape.height,
    borderRadius: shape.borderRadius,
    background: appearance.background,
    boxShadow: appearance.boxShadow,
    ...assignInlineVars({ [indicatorTransitionDuration]: animation.duration }),
  }
  if (value !== undefined)
    return (
      <div
        aria-hidden='true'
        className={valueStyles}
        style={{
          ...style,
          width: `${value}%`,
          transitionTimingFunction: animation.easing ?? 'linear',
        }}
      />
    )
  return animation.segments.map((animationName, index) => (
    <div
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      aria-hidden='true'
      className={movingStyles}
      style={{
        ...style,
        animationName,
        animationTimingFunction: animation.easing ?? 'linear',
      }}
    />
  ))
}
