import type { FC }               from 'react'
import type { HTMLAttributes }   from 'react'

import { clsx }                  from 'clsx'
import React                     from 'react'

import { basePlaceholderStyles } from './placeholder.css.js'

export const Placeholder: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => (
  <span className={clsx(className, basePlaceholderStyles)} {...props}>
    {children}
  </span>
)
