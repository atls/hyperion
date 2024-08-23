import React               from 'react'
import { FC }              from 'react'
import { HTMLAttributes }  from 'react'
import { clsx }            from 'clsx'

import { itemLabelStyles } from './item-label.css.js'

export const ItemLabel: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => (
  <span className={clsx(className, itemLabelStyles)} {...props}>
    {children}
  </span>
)
