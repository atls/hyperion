import type { ReactNode }               from 'react'

import type { CircleProgressAnimation } from './animation/interfaces.js'
import type { IndicatorAppearance }     from './styles/appearance/interfaces.js'
import type { IndicatorShape }          from './styles/shape/interfaces.js'

import { useId }                        from 'react'
import { useRef }                       from 'react'

import { useAnimation }                 from './animation/useAnimation.js'

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
  const svgRef = useRef<SVGSVGElement>(null)
  const contourRef = useRef<SVGRectElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const contourStyle = {
    fill: 'none',
    x: inset,
    y: inset,
    width: `calc(100% - 2 * ${inset})`,
    height: `calc(100% - 2 * ${inset})`,
    rx: `min(${radius}, calc(50cqw - ${inset}), calc(50cqh - ${inset}))`,
    ry: `min(${radius}, calc(50cqw - ${inset}), calc(50cqh - ${inset}))`,
  }
  useAnimation(svgRef, contourRef, pathRef, animation, value, radius, strokeWidth, inset)

  return (
    <>
      <svg
        ref={svgRef}
        width='100%'
        height='100%'
        style={{ position: 'absolute', inset: 0, display: 'block', overflow: 'visible' }}
      >
        <rect ref={contourRef} style={contourStyle} visibility='hidden' />
        <defs>
          <mask id={maskId} maskUnits='userSpaceOnUse' x='0' y='0' width='100%' height='100%'>
            <path
              ref={pathRef}
              fill='none'
              stroke='white'
              strokeWidth={strokeWidth}
              strokeLinecap='round'
            />
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
