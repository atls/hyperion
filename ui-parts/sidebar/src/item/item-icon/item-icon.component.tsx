import React              from 'react'
import { FC }             from 'react'
import { HTMLAttributes } from 'react'
import { clsx }           from 'clsx'

import { itemIconStyles } from './item-icon.css.js'

export const ItemIcon: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx(className, itemIconStyles)} {...props}>
    {children}
  </div>
)
