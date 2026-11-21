import type { ReactNode }            from 'react'

import type { LinearProgressProps }  from './interfaces.js'

import { useTheme }                  from '@atls-ui-parts/theme'

import { LINEAR_PROGRESS_MAX }       from './constants.js'
import { Indicator }                 from './indicator/component.js'
import { Track }                     from './track/component.js'
import { linearProgressAnimations }  from './indicator/animation/variants.js'
import { linearProgressAppearances } from './styles/appearance/variants.js'
import { linearProgressShapes }      from './styles/shape/variants.js'

export const LinearProgress = ({
  value,
  shape = linearProgressShapes.sm,
  appearance = 'primary',
  animation = linearProgressAnimations.indeterminate,
  className,
  style,
  ...props
}: LinearProgressProps): ReactNode => {
  const theme = useTheme()
  const resolvedAppearance =
    typeof appearance === 'string' ? linearProgressAppearances[appearance](theme) : appearance
  const progress =
    value === undefined || !Number.isFinite(value)
      ? undefined
      : Math.max(0, Math.min(value, LINEAR_PROGRESS_MAX))

  return (
    <Track
      {...props}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={LINEAR_PROGRESS_MAX}
      aria-valuenow={progress}
      className={className}
      style={style}
      shape={shape.track}
      appearance={resolvedAppearance.track}
    >
      <Indicator
        shape={shape.indicator}
        appearance={resolvedAppearance.indicator}
        value={progress}
        animation={animation}
      />
    </Track>
  )
}
