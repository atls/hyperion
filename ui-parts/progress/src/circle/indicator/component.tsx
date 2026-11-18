import type { ReactNode }               from 'react'

import type { CircleProgressAnimation } from './animation/interfaces.js'

import { animations }                   from '@atls-ui/theme/tokens'
import { opacity }                      from '@atls-ui/theme/tokens'

import { PROGRESS_MAX }                 from '../constants.js'
import { movingStyles }                 from './styles/base.css.js'
import { valueStyles }                  from './styles/base.css.js'

export const Indicator = ({
  href,
  value,
  animation,
}: {
  href: string
  value?: number
  animation: CircleProgressAnimation
}): ReactNode => {
  if (value !== undefined) {
    const length = value / PROGRESS_MAX
    return (
      <use
        href={href}
        className={valueStyles}
        style={{
          strokeDasharray: `${length} ${1 - length}`,
          strokeDashoffset: length,
          opacity: value === 0 ? opacity.none : opacity.full,
        }}
      />
    )
  }
  return animation.segments.map((animationName, index) => (
    <use
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      href={href}
      className={movingStyles}
      style={{
        animationName,
        animationDuration: animation.duration,
        animationTimingFunction: animation.easing ?? animations.easing.linear,
      }}
    />
  ))
}
