import type { ReactNode }     from 'react'

import type { BoxAppearance } from './styles/appearance/interfaces.js'
import type { BoxShape }      from './styles/shape/interfaces.js'

import { boxStyles }          from './styles/base.css.js'

export const Box = ({
  children,
  shape,
  appearance,
}: {
  children: ReactNode
  shape: BoxShape
  appearance: BoxAppearance
}): ReactNode => (
  <div
    className={boxStyles}
    style={{
      paddingInline: shape.paddingInline,
      paddingBlock: shape.paddingBlock,
      borderRadius: shape.radius,
      backgroundColor: appearance.backgroundColor,
      boxShadow: appearance.shadow,
    }}
  >
    {children}
  </div>
)
