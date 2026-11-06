import type { ReactNode }            from 'react'

import type { CircleProgressProps }  from './interfaces.js'

import { useId }                     from 'react'

import { useTheme }                  from '@atls-ui-parts/theme'

import { Box }                       from './box/component.js'
import { Indicator }                 from './indicator/component.js'
import { Label }                     from './label/component.js'
import { Track }                     from './track/component.js'
import { containerStyles }           from './container/styles/base.css.js'
import { circleProgressAppearances } from './styles/appearance/variants.js'
import { circleProgressShapes }      from './styles/shape/variants.js'

export const CircleProgress = ({
  value,
  shape = circleProgressShapes.md,
  appearance = 'primary',
  animation = 'orbit',
  children,
  style,
  className,
  ...props
}: CircleProgressProps): ReactNode => {
  const theme = useTheme()
  const gradientId = useId()
  const colors =
    typeof appearance === 'string' ? circleProgressAppearances[appearance](theme) : appearance
  const progress =
    value === undefined || !Number.isFinite(value) ? undefined : Math.max(0, Math.min(value, 100))
  const { width, height } = shape.container
  const { inset: boxInset, radius } = shape.box
  const { strokeWidth } = shape.indicator
  const { typography } = shape.label

  return (
    <div
      {...props}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      className={`${containerStyles} ${className ?? ''}`}
      style={{ ...style, width, height }}
    >
      <Track
        inset={boxInset}
        radius={radius}
        strokeWidth={strokeWidth}
        color={colors.track.color}
      />
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: boxInset,
          pointerEvents: 'none',
          containerType: 'size',
        }}
      >
        <svg
          width='100%'
          height='100%'
          style={{ display: 'block', overflow: 'visible', color: colors.indicator.color }}
        >
          <defs>
            <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor={colors.indicator.color} />
              <stop offset='100%' stopColor={colors.indicator.endColor} />
            </linearGradient>
          </defs>
          <Indicator
            radius={radius}
            strokeWidth={strokeWidth}
            color={`url(#${gradientId})`}
            value={progress}
            animation={animation}
          />
        </svg>
      </div>
      <Box
        inset={boxInset}
        radius={radius}
        backgroundColor={colors.box.backgroundColor}
        shadow={colors.box.shadow}
      >
        {children ??
          (progress === undefined ? null : (
            <Label color={colors.label.color} typography={typography}>
              {progress}%
            </Label>
          ))}
      </Box>
    </div>
  )
}
