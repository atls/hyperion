import type { ReactNode }                    from 'react'

import type { InputIndicatorProps }          from './interfaces.js'

import { assignInlineVars }                  from '@vanilla-extract/dynamic'
import { clsx }                              from 'clsx'

import { inputIndicatorAppearanceStyles }    from './styles/appearance/styles.css.js'
import { inputIndicatorAppearanceVariables } from './styles/appearance/styles.css.js'
import { inputIndicatorBaseStyles }          from './styles/base.css.js'
export const InputIndicator = ({
  shape,
  appearance,
  children,
  className,
}: InputIndicatorProps): ReactNode =>
  children == null || children === false ? null : (
    <span
      aria-hidden='true'
      className={clsx(inputIndicatorBaseStyles, inputIndicatorAppearanceStyles, className)}
      style={{
        width: shape.size,
        height: shape.size,
        fontSize: shape.size,
        ...assignInlineVars(inputIndicatorAppearanceVariables, appearance),
      }}
    >
      {children}
    </span>
  )
