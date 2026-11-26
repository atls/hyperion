import type { ReactNode }       from 'react'

import type { IconProps }       from './interfaces.js'

import { assignInlineVars }     from '@vanilla-extract/dynamic'

import { iconVariables }        from './styles/appearance/styles.css.js'
import { iconAppearanceStyles } from './styles/appearance/styles.css.js'
import { iconBaseStyles }       from './styles/base.css.js'
export const Icon = ({ children, shape, appearance, hoverAppearance }: IconProps): ReactNode => (
  <span
    aria-hidden='true'
    className={`${iconBaseStyles} ${iconAppearanceStyles}`}
    style={{
      width: shape.size,
      height: shape.size,
      ...assignInlineVars(iconVariables, {
        color: appearance.color,
        hoverColor: hoverAppearance.color,
      }),
    }}
  >
    {children}
  </span>
)
