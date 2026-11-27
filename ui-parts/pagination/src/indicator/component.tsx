import type { ReactNode }               from 'react'

import type { IndicatorProps }          from './interfaces.js'

import { assignInlineVars }             from '@vanilla-extract/dynamic'
import { clsx }                         from 'clsx'

import { borderWidths }                 from '@atls-ui/theme/tokens'
import { radii }                        from '@atls-ui/theme/tokens'

import { itemGap }                      from '../container/styles/shape/variables.css.js'
import { itemWidth }                    from '../item/styles/shape/variables.css.js'
import { paginationAnimationVariables } from './animation/variables.css.js'
import { indicatorStyles }              from './styles.css.js'
import { layerStyles }                  from './styles.css.js'
import { travelDirection }              from './styles.css.js'

export const Indicator = ({
  animation,
  phase,
  distance,
  direction,
  background,
  borderColor,
  shape,
  className,
}: IndicatorProps): ReactNode => (
  <span
    aria-hidden='true'
    className={clsx(indicatorStyles, className)}
    style={{
      ...assignInlineVars({
        [paginationAnimationVariables.distance]: `calc((${itemWidth} + ${itemGap}) * ${distance})`,
        [travelDirection]: String(direction),
        [paginationAnimationVariables.radius]:
          typeof shape.borderRadius === 'number'
            ? `${shape.borderRadius}px`
            : (shape.borderRadius ?? radii.none),
        [paginationAnimationVariables.borderWidth]:
          typeof shape.borderWidth === 'number'
            ? `${shape.borderWidth}px`
            : (shape.borderWidth ?? borderWidths.none),
      }),
      height: shape.height,
      borderRadius: shape.borderRadius,
    }}
  >
    {Object.entries(animation[phase]).map(([id, keyframes]) => (
      <span
        key={id}
        className={layerStyles}
        style={{ background, borderColor, color: borderColor, ...keyframes }}
      />
    ))}
  </span>
)
