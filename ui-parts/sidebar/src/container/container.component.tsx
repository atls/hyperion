import React               from 'react'
import { FC }              from 'react'
import { HTMLAttributes }  from 'react'
import { clsx }            from 'clsx'

import { containerStyles } from './container.css.js'

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={clsx(className, containerStyles)} {...props}>
    {children}
  </div>
)
