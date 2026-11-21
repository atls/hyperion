import type { ReactNode }            from 'react'

import type { CircleProgressProps }  from './interfaces.js'

import { assignInlineVars }          from '@vanilla-extract/dynamic'
import { clsx }                      from 'clsx'

import { useTheme }                  from '@atls-ui-parts/theme'

import { Box }                       from './box/component.js'
import { PROGRESS_MAX }              from './constants.js'
import { DEFAULT_INDICATOR_OVERLAP } from './indicator/styles/shape/constants.js'
import { Label }                     from './label/component.js'
import { Track }                     from './track/component.js'
import { radiusInput }               from './box/styles/shape/variables.css.js'
import { containerStyles }           from './container/styles/base.css.js'
import { circleProgressAnimations }  from './indicator/animation/variants.js'
import { circleProgressAppearances } from './styles/appearance/variants.js'
import { circleProgressShapes }      from './styles/shape/variants.js'
import { indicatorOverlap }          from './track/styles/variables.css.js'
import { strokeWidth }               from './track/styles/variables.css.js'

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
  const { strokeWidth: thickness, overlap = DEFAULT_INDICATOR_OVERLAP } = shape.indicator

  return (
    <div
      {...props}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={PROGRESS_MAX}
      aria-valuenow={progress}
      className={clsx(containerStyles, className)}
      style={{
        ...shape.container,
        ...assignInlineVars({
          [radiusInput]: shape.box.radius,
          [strokeWidth]: typeof thickness === 'number' ? `${thickness}px` : thickness,
          [indicatorOverlap]: String(overlap),
        }),
        ...style,
      }}
    >
      <Track appearance={colors} value={progress} animation={animation} />
      <Box shape={shape.box} appearance={colors.box}>
        {children ?? <Label color={colors.label.color} shape={shape.label} value={progress} />}
      </Box>
    </div>
  )
}
