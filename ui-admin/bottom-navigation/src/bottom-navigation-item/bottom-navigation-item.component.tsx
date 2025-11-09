import type { ReactElement }          from 'react'
import type { FunctionComponent }     from 'react'

import { createElement }              from 'react'
import React                          from 'react'

import { bottomNavigationItemStyles } from './bottom-navigation-item.styles.css.js'

export interface BottomNavigationItemProps {
  icon: FunctionComponent<{
    color?: string
    width?: number | string
    height?: number | string
  }>
}

export const BottomNavigationItem = ({ icon }: BottomNavigationItemProps): ReactElement => (
  <div className={bottomNavigationItemStyles}>
    {createElement(icon, {
      color: 'white',
      width: 20,
      height: 20,
    })}
  </div>
)
