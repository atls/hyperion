import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'
import React                   from 'react'

import { baseContainerStyles } from './container.css.js'

export const Container = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={clsx(baseContainerStyles, className)} {...props}>
    {children}
  </div>
)
