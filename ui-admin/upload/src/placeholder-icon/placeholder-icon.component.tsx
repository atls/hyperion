import type { ReactNode }            from 'react'
import type { HTMLAttributes }       from 'react'

import { clsx }                      from 'clsx'
import React                         from 'react'

import { basePlaceholderIconStyles } from './placeholder-icon.css.js'

export const PlaceholderIcon = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): ReactNode => (
  <span className={clsx(className, basePlaceholderIconStyles)} {...props}>
    {children}
  </span>
)
