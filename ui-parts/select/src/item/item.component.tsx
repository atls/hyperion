import React                         from 'react'
import { FC }                        from 'react'
import { clsx }                      from 'clsx'

import { ItemProps }                 from './item.interfaces.js'
import { baseItemStyles }            from './item.css.js'
import { highlightedMenuItemStyles } from './item.css.js'

export const MenuItem: FC<ItemProps> = ({ highlighted, children, ...props }) => (
  <li className={clsx(baseItemStyles, highlighted && highlightedMenuItemStyles)} {...props}>
    {children}
  </li>
)
