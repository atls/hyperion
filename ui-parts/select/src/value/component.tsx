import type { ReactNode }           from 'react'

import type { ValueProps }          from './interfaces.js'

import { assignInlineVars }         from '@vanilla-extract/dynamic'
import { clsx }                     from 'clsx'

import { valueAppearanceStyles }    from './styles/appearance/styles.css.js'
import { valueAppearanceVariables } from './styles/appearance/styles.css.js'
import { valueBaseStyles }          from './styles/base.css.js'
export const Value = ({
  shape,
  appearance,
  placeholder,
  className,
  ...props
}: ValueProps): ReactNode => (
  <span
    {...props}
    className={clsx(valueBaseStyles, valueAppearanceStyles, className)}
    data-placeholder={placeholder}
    style={{ ...shape.typography, ...assignInlineVars(valueAppearanceVariables, appearance) }}
  />
)
