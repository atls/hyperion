import type { ReactNode }     from 'react'
import type { CSSProperties } from 'react'

import { boxStyles }          from './styles/base.css.js'

export const Box = ({
  children,
  inset,
  radius,
  backgroundColor,
  shadow,
}: {
  children: ReactNode
  inset: CSSProperties['inset']
  radius: number
  backgroundColor: string
  shadow: string
}): ReactNode => (
  <div
    className={boxStyles}
    style={{ inset, borderRadius: radius, backgroundColor, boxShadow: shadow }}
  >
    {children}
  </div>
)
