import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'
import React                   from 'react'

import { itemIconStyles }      from './item-icon.css.js'

export const ItemIcon = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={clsx(className, itemIconStyles)} {...props}>
    {children}
  </div>
)
