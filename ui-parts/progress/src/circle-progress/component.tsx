import type { ReactNode }            from 'react'

import type { CircleProgressProps }  from './interfaces.js'

import { useTheme }                  from '@atls-ui-parts/theme'

import { Box }                       from './box/component.js'
import { PROGRESS_MAX }              from './constants.js'
import { PAINT_PIXEL_SIZE }          from './constants.js'
import { STROKE_CENTER_RATIO }       from './constants.js'
import { Indicator }                 from './indicator/component.js'
import { DEFAULT_INDICATOR_OVERLAP } from './indicator/styles/shape/constants.js'
import { Label }                     from './label/component.js'
import { Track }                     from './track/component.js'
import { containerStyles }           from './container/styles/base.css.js'
import { circleProgressAnimations }  from './indicator/animation/variants.js'
import { circleProgressAppearances } from './styles/appearance/variants.js'
import { circleProgressShapes }      from './styles/shape/variants.js'

export const CircleProgress = ({
  value,
  shape = circleProgressShapes.md,
  appearance = 'primary',
  animation = circleProgressAnimations.orbit,
  children,
  style,
  className,
  ...props
}: CircleProgressProps): ReactNode => {
  const theme = useTheme()
  const colors =
    typeof appearance === 'string' ? circleProgressAppearances[appearance](theme) : appearance
  const progress =
    value === undefined || !Number.isFinite(value)
      ? undefined
      : Math.max(0, Math.min(value, PROGRESS_MAX))
  const { radius } = shape.box
  const { strokeWidth, overlap = DEFAULT_INDICATOR_OVERLAP } = shape.indicator
  const stroke = typeof strokeWidth === 'number' ? `${strokeWidth}px` : strokeWidth
  const { padding: containerPadding, ...containerShape } = shape.container ?? {}
  const padding =
    typeof containerPadding === 'number'
      ? `${containerPadding}px`
      : (containerPadding ?? `calc(${stroke} / 2)`)

  const contourOffset = `calc(${stroke} * (${STROKE_CENTER_RATIO} - ${overlap}))`
  const contourInset = `calc(${padding} - ${contourOffset})`
  const contourRadius = `max(0px, calc(${radius} + ${contourOffset}))`
  const paintPadding = `calc(${stroke} + ${PAINT_PIXEL_SIZE})`

  return (
    <div
      {...props}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={PROGRESS_MAX}
      aria-valuenow={progress}
      className={`${containerStyles} ${className ?? ''}`}
      style={{ padding, ...containerShape, ...style }}
    >
      <Track
        inset={contourInset}
        radius={contourRadius}
        strokeWidth={strokeWidth}
        color={colors.track.color}
      />
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: `calc(0px - ${paintPadding})`,
          pointerEvents: 'none',
          containerType: 'size',
        }}
      >
        <Indicator
          radius={contourRadius}
          inset={`calc(${contourInset} + ${paintPadding})`}
          strokeWidth={strokeWidth}
          appearance={colors.indicator}
          value={progress}
          animation={animation}
        />
      </div>
      <Box shape={shape.box} appearance={colors.box}>
        {children ?? <Label color={colors.label.color} shape={shape.label} value={progress} />}
      </Box>
    </div>
  )
}
