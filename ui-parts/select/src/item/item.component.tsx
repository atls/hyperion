import type { FC }                   from 'react'

import type { ItemProps }            from './item.interfaces.js'

import { clsx }                      from 'clsx'
import React                         from 'react'

import { baseItemStyles }            from './item.css.js'
import { highlightedMenuItemStyles } from './item.css.js'

export const MenuItem: FC<ItemProps> = ({ highlighted, children, ...props }) => (
  <li className={clsx(baseItemStyles, highlighted && highlightedMenuItemStyles)} {...props}>
    {children}
  </li>
)
