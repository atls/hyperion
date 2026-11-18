import type { ReactNode }               from 'react'

import type { CircleProgressAnimation } from './animation/interfaces.js'

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
          opacity: value === 0 ? 0 : 1,
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
        animationTimingFunction: animation.easing ?? 'linear',
      }}
    />
  ))
}
