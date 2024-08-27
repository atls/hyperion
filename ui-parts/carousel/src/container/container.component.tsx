import { HTMLAttributes }  from 'react'
import { clsx }            from 'clsx'
import { forwardRef }      from 'react'
import React               from 'react'

import { containerStyles } from './container.css.js'

export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((
  { children, className, ...props },
  ref
) => (
  <div ref={ref} className={clsx(className, containerStyles)} {...props}>
    {children}
  </div>
))
