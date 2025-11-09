import type { ReactElement }      from 'react'
import type { FunctionComponent } from 'react'

import { createElement }          from 'react'
import React                      from 'react'

import { sidebarItemStyles }      from './sidebar-item.styles.css.js'

export interface SidebarItemProps {
  icon: FunctionComponent<{
    color?: string
    width?: number | string
    height?: number | string
  }>
}

export const SidebarItem = ({ icon }: SidebarItemProps): ReactElement => (
  <div className={sidebarItemStyles}>
    {createElement(icon, {
      color: 'white',
      width: 20,
      height: 20,
    })}
  </div>
)
