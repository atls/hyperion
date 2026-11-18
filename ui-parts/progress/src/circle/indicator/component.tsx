import type { ReactNode }               from 'react'

import type { CircleProgressAnimation } from './animation/interfaces.js'

import { assignInlineVars }             from '@vanilla-extract/dynamic'
import { clsx }                         from 'clsx'
import { useRef }                       from 'react'

import { PROGRESS_MAX }                 from '../constants.js'
import { valueTransitionStyles }        from './animation/styles.css.js'
import { useAnimation }                 from './animation/useAnimation.js'
import { segmentStyles }                from './styles/base.css.js'
import { segmentLength }                from './styles/base.css.js'

export const Indicator = ({
  href,
  value,
  animation,
}: {
  href: string
  value?: number
  animation: CircleProgressAnimation
}): ReactNode => {
  const maskRef = useRef<SVGGElement>(null)
  useAnimation(maskRef, value === undefined ? animation : undefined)
  const segments = value === undefined ? animation.segments : [{ frames: [] }]
  return (
    <g ref={maskRef} stroke='white' strokeLinecap='round'>
      {segments.map((_, index) => (
        <use
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          href={href}
          className={clsx(segmentStyles, value !== undefined && valueTransitionStyles)}
          style={assignInlineVars({
            [segmentLength]: value === undefined ? undefined : String(value / PROGRESS_MAX),
          })}
        />
      ))}
    </g>
  )
}
