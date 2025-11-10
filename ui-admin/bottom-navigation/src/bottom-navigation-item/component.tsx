import type { ComponentType }         from 'react'
import type { ReactElement }          from 'react'

import { createElement }              from 'react'

import { vars }                       from '@atls-ui-admin/theme'

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
      color: vars.colors.white,
      width: 20,
      height: 20,
    })}
  </div>
)
