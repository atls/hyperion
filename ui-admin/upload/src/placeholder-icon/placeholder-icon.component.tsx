import { FC }                        from 'react'
import { HTMLAttributes }            from 'react'
import { clsx }                      from 'clsx'
import React                         from 'react'

import { basePlaceholderIconStyles } from './placeholder-icon.css.js'

export const PlaceholderIcon: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => (
  <span className={clsx(className, basePlaceholderIconStyles)} {...props}>
    {children}
  </span>
)
