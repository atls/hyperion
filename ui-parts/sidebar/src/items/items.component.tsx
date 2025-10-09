import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'

import { itemsStyles }         from './items.css.js'

export const Items = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={clsx(className, itemsStyles)} {...props}>
    {children}
  </div>
)
