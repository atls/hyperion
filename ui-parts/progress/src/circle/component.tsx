import type { ReactNode }            from 'react'

import type { CircleProgressProps }  from './interfaces.js'

import { useTheme }                  from '@atls-ui-parts/theme'

import { Box }                       from './box/component.js'
import { PROGRESS_MAX }              from './constants.js'
import { Indicator }                 from './indicator/component.js'
import { Label }                     from './label/component.js'
import { Track }                     from './track/component.js'
import { containerStyles }           from './container/styles/base.css.js'
import { circleProgressAnimations }  from './indicator/animation/variants.js'
import { circleProgressAppearances } from './styles/appearance/variants.js'
import { resolveShape }              from './styles/shape/resolve.js'
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
  const { padding, paintPadding, strokeWidth, contour } = resolveShape(shape)

  return (
    <div
      {...props}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={PROGRESS_MAX}
      aria-valuenow={progress}
      className={`${containerStyles} ${className ?? ''}`}
      style={{ ...shape.container, padding, ...style }}
    >
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          containerType: 'size',
        }}
      >
        <div style={{ position: 'absolute', inset: `calc(0px - ${paintPadding})` }}>
          <Track contour={contour} strokeWidth={strokeWidth} color={colors.track.color} />
          <Indicator
            contour={contour}
            strokeWidth={strokeWidth}
            appearance={colors.indicator}
            value={progress}
            animation={animation}
          />
        </div>
      </div>
      <Box shape={shape.box} appearance={colors.box}>
        {children ?? <Label color={colors.label.color} shape={shape.label} value={progress} />}
      </Box>
    </div>
  )
}
