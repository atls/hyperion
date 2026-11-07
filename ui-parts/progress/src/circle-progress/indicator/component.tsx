import type { ReactNode }               from 'react'

import type { CircleProgressAnimation } from '../interfaces.js'

import { indicatorStyles }              from './styles/animation.css.js'
import { firstSegmentStyles }           from './styles/animation.css.js'
import { secondSegmentStyles }          from './styles/animation.css.js'
import { spinnerStyles }                from './styles/animation.css.js'

export const Indicator = ({
  radius,
  strokeWidth,
  color,
  value,
  animation,
}: {
  radius: number
  strokeWidth: number
  color: string
  value?: number
  animation: CircleProgressAnimation
}): ReactNode => {
  const variant = typeof animation === 'string' ? animation : animation.variant
  const animationStyle =
    typeof animation === 'string'
      ? {}
      : {
          animationDuration: animation.duration,
          animationTimingFunction: animation.easing,
        }
  const rectProps = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%',
    style: {
      fill: 'none',
      rx: `min(${radius}px, 50cqw, 50cqh)`,
      ry: `min(${radius}px, 50cqw, 50cqh)`,
    },
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round' as const,
    pathLength: 100,
  }

  if (value === undefined) {
    if (variant === 'spinner') {
      return (
        <rect
          {...rectProps}
          style={{ ...rectProps.style, ...animationStyle }}
          className={spinnerStyles}
          strokeDasharray='25 75'
        />
      )
    }
    return (
      <>
        <rect
          {...rectProps}
          style={{ ...rectProps.style, ...animationStyle }}
          className={firstSegmentStyles}
          strokeDasharray='18 82'
        />
        <rect
          {...rectProps}
          style={{ ...rectProps.style, ...animationStyle }}
          className={secondSegmentStyles}
          strokeDasharray='18 82'
        />
      </>
    )
  }

  return (
    <rect
      {...rectProps}
      className={indicatorStyles}
      strokeDasharray='100 100'
      strokeDashoffset={100 - value}
    />
  )
}
