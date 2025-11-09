import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import React                 from 'react'

import { sidebarRootStyles } from './sidebar-root.styles.css.js'

export interface SidebarRootProps {
  children?: ReactNode
}

export const SidebarRoot = ({ children }: SidebarRootProps): ReactElement => (
  <div className={sidebarRootStyles}>{children}</div>
)
