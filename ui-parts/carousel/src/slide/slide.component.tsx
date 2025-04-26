import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'
import React                   from 'react'

import { slideStyles }         from './slide.css.js'

export const Slide = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={clsx(className, slideStyles)} {...props}>
    {children}
  </div>
)
