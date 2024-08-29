import type { FC }             from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'
import React                   from 'react'

import { itemIconStyles }      from './item-icon.css.js'

export const ItemIcon: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx(className, itemIconStyles)} {...props}>
    {children}
  </div>
)
