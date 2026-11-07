import type { CSSProperties } from 'react'
import type { ReactNode }     from 'react'

export const Label = ({
  children,
  color,
  typography,
}: {
  children: ReactNode
  color: string
  typography: CSSProperties
}): ReactNode => <span style={{ ...typography, color }}>{children}</span>
