import React                         from 'react'
import clsx                          from 'clsx'
import { PropsWithChildren }         from 'react'

import { ItemProps }                 from './item.interfaces.js'
import { baseItemStyles }            from './item.styles.css.js'
import { highlightedMenuItemStyles } from './item.styles.css.js'

export const MenuItem: React.FC<PropsWithChildren<ItemProps>> = ({ highlighted, children }) => (
  <li className={clsx(baseItemStyles, highlighted && highlightedMenuItemStyles)}>{children}</li>
)
