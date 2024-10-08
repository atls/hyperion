import type { FC }             from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'
import React                   from 'react'

import { itemsStyles }         from './items.css.js'

export const Items: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx(className, itemsStyles)} {...props}>
    {children}
  </div>
)
