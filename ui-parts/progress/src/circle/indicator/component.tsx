import type { ReactNode }               from 'react'

import type { CircleProgressAnimation } from './animation/interfaces.js'
import type { IndicatorAppearance }     from './styles/appearance/interfaces.js'
import type { IndicatorShape }          from './styles/shape/interfaces.js'

import { assignInlineVars }             from '@vanilla-extract/dynamic'
import { clsx }                         from 'clsx'
import { useId }                        from 'react'
import { useRef }                       from 'react'

import { PROGRESS_MAX }                 from '../constants.js'
import { valueTransitionStyles }        from './animation/styles.css.js'
import { useAnimation }                 from './animation/useAnimation.js'
import { segmentStyles }                from './styles/base.css.js'
import { segmentLength }                from './styles/base.css.js'

export const Indicator = ({
  radius,
  inset,
  strokeWidth,
  appearance,
  value,
  animation,
}: {
  radius: string
  inset: string
  strokeWidth: IndicatorShape['strokeWidth']
  appearance: IndicatorAppearance
  value?: number
  animation: CircleProgressAnimation
}): ReactNode => {
  const maskId = useId()
  const maskRef = useRef<SVGGElement>(null)
  const contour = {
    x: inset,
    y: inset,
    width: `calc(100% - 2 * ${inset})`,
    height: `calc(100% - 2 * ${inset})`,
    rx: `min(${radius}, calc(50cqw - ${inset}), calc(50cqh - ${inset}))`,
    ry: `min(${radius}, calc(50cqw - ${inset}), calc(50cqh - ${inset}))`,
  }
  useAnimation(maskRef, value === undefined ? animation : undefined)
  const segments = value === undefined ? animation.segments : [{ frames: [] }]

  return (
    <>
      <svg
        width='100%'
        height='100%'
        style={{ position: 'absolute', inset: 0, display: 'block', overflow: 'visible' }}
      >
        <defs>
          <mask id={maskId} maskUnits='userSpaceOnUse' x='0' y='0' width='100%' height='100%'>
            <g ref={maskRef}>
              {segments.map((_, index) => (
                <rect
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={clsx(segmentStyles, value !== undefined && valueTransitionStyles)}
                  fill='none'
                  pathLength={1}
                  stroke='white'
                  strokeWidth={strokeWidth}
                  strokeLinecap='round'
                  style={{
                    ...contour,
                    ...assignInlineVars({
                      [segmentLength]:
                        value === undefined ? undefined : String(value / PROGRESS_MAX),
                    }),
                  }}
                />
              ))}
            </g>
          </mask>
        </defs>
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: appearance.background,
          maskImage: `url(#${maskId})`,
          WebkitMaskImage: `url(#${maskId})`,
        }}
      />
    </>
  )
}
