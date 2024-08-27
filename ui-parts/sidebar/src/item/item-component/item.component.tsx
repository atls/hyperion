import { FC }               from 'react'
import { clsx }             from 'clsx'
import React                from 'react'

import { ItemProps }        from './item.interfaces.js'
import { activeItemStyles } from './item.css.js'
import { baseItemStyles }   from './item.css.js'

export const Item: FC<ItemProps> = ({ children, active, className, ...props }) => (
  <a className={clsx(className, baseItemStyles, active && activeItemStyles)} {...props}>
    {children}
  </a>
)
