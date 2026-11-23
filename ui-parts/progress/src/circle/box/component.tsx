import type { ReactNode }     from 'react'

import type { BoxAppearance } from './styles/appearance/interfaces.js'
import type { BoxShape }      from './styles/shape/interfaces.js'

import { assignInlineVars }   from '@vanilla-extract/dynamic'

import { boxStyles }          from './styles/base.css.js'
import { surfaceStyles }      from './styles/base.css.js'
import { boxBackground }      from './styles/base.css.js'
import { boxShadow }          from './styles/base.css.js'

export const Box = ({
  shape,
  appearance,
  children,
}: {
  shape: BoxShape
  appearance: BoxAppearance
  children: ReactNode
}): ReactNode => (
  <div
    className={boxStyles}
    style={{ paddingInline: shape.paddingInline, paddingBlock: shape.paddingBlock }}
  >
    <div
      aria-hidden='true'
      className={surfaceStyles}
      style={assignInlineVars({
        [boxBackground]: appearance.backgroundColor,
        [boxShadow]: appearance.shadow,
      })}
    />
    {children}
  </div>
)
