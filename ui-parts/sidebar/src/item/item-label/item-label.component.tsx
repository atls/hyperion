import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'
import React                   from 'react'

import { itemLabelStyles }     from './item-label.css.js'

export const ItemLabel = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): ReactNode => (
  <span className={clsx(className, itemLabelStyles)} {...props}>
    {children}
  </span>
)
