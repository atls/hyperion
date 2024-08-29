import type { FC }          from 'react'

import type { ItemProps }   from './item.interfaces.js'

import { clsx }             from 'clsx'
import React                from 'react'

import { activeItemStyles } from './item.css.js'
import { baseItemStyles }   from './item.css.js'

export const Item: FC<ItemProps> = ({ children, active, className, ...props }) => (
  <a className={clsx(className, baseItemStyles, active && activeItemStyles)} {...props}>
    {children}
  </a>
)
