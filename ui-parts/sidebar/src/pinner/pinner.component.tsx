import type { FC }             from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'
import React                   from 'react'

import { pinnerStyles }        from './pinner.css.js'

export const Pinner: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx(className, pinnerStyles)} {...props}>
    {children}
  </div>
)
