import type { ReactElement }  from 'react'
import type { ComponentType } from 'react'

import { createElement }      from 'react'

import { sidebarItemStyles }  from './styles.css.js'

export interface SidebarItemProps {
  icon: ComponentType<{
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
