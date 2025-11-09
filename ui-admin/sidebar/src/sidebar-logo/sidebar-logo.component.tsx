import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import React                 from 'react'

import { sidebarLogoStyles } from './sidebar-logo.styles.css.js'

export interface SidebarLogoProps {
  children: ReactNode
}

export const SidebarLogo = ({ children }: SidebarLogoProps): ReactElement => (
  <div className={sidebarLogoStyles}>{children}</div>
)
