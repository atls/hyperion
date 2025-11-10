import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import { sidebarLogoStyles } from './styles.css.js'

export interface SidebarLogoProps {
  children: ReactNode
}

export const SidebarLogo = ({ children }: SidebarLogoProps): ReactElement => (
  <div className={sidebarLogoStyles}>{children}</div>
)
