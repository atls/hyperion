import type { ReactNode }      from 'react'

import type { BoxProps }       from './interfaces.js'

import { assignInlineVars }    from '@vanilla-extract/dynamic'

import { boxVariables }        from './styles/appearance/styles.css.js'
import { boxAppearanceStyles } from './styles/appearance/styles.css.js'
import { boxBaseStyles }       from './styles/base.css.js'
export const Box = ({
  shape,
  appearance,
  hoverAppearance,
  className,
  style,
  ...props
}: BoxProps): ReactNode => (
  <div
    {...props}
    className={[boxBaseStyles, boxAppearanceStyles, className].filter(Boolean).join(' ')}
    style={{
      ...shape,
      ...assignInlineVars(boxVariables, {
        background: appearance.backgroundColor,
        border: appearance.borderColor,
        shadow: appearance.shadow,
        hoverBackground: hoverAppearance.backgroundColor,
        hoverBorder: hoverAppearance.borderColor,
        hoverShadow: hoverAppearance.shadow,
      }),
      ...style,
    }}
  />
)
