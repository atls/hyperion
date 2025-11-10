import type { ReactElement }              from 'react'

import type { BottomNavigationItemProps } from './bottom-navigation-item/index.js'

import { BottomNavigationItem }           from './bottom-navigation-item/index.js'
import { BottomNavigationRoot }           from './bottom-navigation-root/index.js'

export interface BottomNavigationProps {
  items: Array<BottomNavigationItemProps>
}

export const BottomNavigation = ({ items = [] }: BottomNavigationProps): ReactElement => (
  <BottomNavigationRoot>
    {items.map((item) => (
      <BottomNavigationItem key={item.icon.name} icon={item.icon} />
    ))}
  </BottomNavigationRoot>
)
