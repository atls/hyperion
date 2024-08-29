import type { FC }                     from 'react'
import type { HTMLAttributes }         from 'react'

import { clsx }                        from 'clsx'
import React                           from 'react'

import { basePlaceholderAcceptStyles } from './placeholder-accept.css.js'

export const PlaceholderAccept: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => (
  <span className={clsx(className, basePlaceholderAcceptStyles)} {...props}>
    {children}
  </span>
)
