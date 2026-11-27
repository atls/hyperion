import type { ReactNode }               from 'react'

import type { IndicatorProps }          from './interfaces.js'

import { assignInlineVars }             from '@vanilla-extract/dynamic'
import { clsx }                         from 'clsx'

import { indicatorAppearanceStyles }    from './styles/appearance/styles.css.js'
import { indicatorAppearanceVariables } from './styles/appearance/styles.css.js'
import { indicatorBaseStyles }          from './styles/base.css.js'
export const Indicator = ({
  shape,
  appearance,
  children,
  className,
}: IndicatorProps): ReactNode => (
  <span
    aria-hidden='true'
    className={clsx(indicatorBaseStyles, indicatorAppearanceStyles, className)}
    style={{
      width: shape.size,
      height: shape.size,
      fontSize: shape.size,
      ...assignInlineVars(indicatorAppearanceVariables, appearance),
    }}
  >
    {children}
  </span>
)
