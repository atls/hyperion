import type { ReactNode }        from 'react'

import type { LabelProps }       from './interfaces.js'

import { assignInlineVars }      from '@vanilla-extract/dynamic'

import { labelVariables }        from './styles/appearance/styles.css.js'
import { labelAppearanceStyles } from './styles/appearance/styles.css.js'
import { labelBaseStyles }       from './styles/base.css.js'
export const Label = ({
  text,
  shape,
  appearance,
  hoverAppearance,
  ...props
}: LabelProps): ReactNode => (
  <span
    {...props}
    className={`${labelBaseStyles} ${labelAppearanceStyles}`}
    style={{
      ...shape.typography,
      ...assignInlineVars(labelVariables, {
        color: appearance.color,
        hoverColor: hoverAppearance.color,
      }),
    }}
  >
    {text}
  </span>
)
