import type { ComponentType }         from 'react'
import type { ReactElement }          from 'react'

import { createElement }              from 'react'

import { bottomNavigationItemStyles } from './styles.css.js'

export interface BottomNavigationItemProps {
  icon: ComponentType<{
    color?: string
    width?: number | string
    height?: number | string
  }>
}

export const BottomNavigationItem = ({ icon }: BottomNavigationItemProps): ReactElement => (
  <div className={bottomNavigationItemStyles}>
    {createElement(icon, {
      color: 'rgba(255, 255, 255, 1)',
      width: 20,
      height: 20,
    })}
  </div>
)
