import React              from 'react'
import { FC }             from 'react'
import { HTMLAttributes } from 'react'
import { clsx }           from 'clsx'

import { itemsStyles }    from './items.css.js'

export const Items: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx(className, itemsStyles)} {...props}>
    {children}
  </div>
)
