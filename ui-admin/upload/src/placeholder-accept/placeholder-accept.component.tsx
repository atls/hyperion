import type { ReactNode }              from 'react'
import type { HTMLAttributes }         from 'react'

import { clsx }                        from 'clsx'
import React                           from 'react'

import { basePlaceholderAcceptStyles } from './placeholder-accept.css.js'

export const PlaceholderAccept = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): ReactNode => (
  <span className={clsx(className, basePlaceholderAcceptStyles)} {...props}>
    {children}
  </span>
)
