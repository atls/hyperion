import React                     from 'react'
import { FC }                    from 'react'
import { HTMLAttributes }        from 'react'
import { clsx }                  from 'clsx'

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
