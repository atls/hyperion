import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'
import React                   from 'react'

import { pinnerStyles }        from './pinner.css.js'

export const Pinner = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={clsx(className, pinnerStyles)} {...props}>
    {children}
  </div>
)
