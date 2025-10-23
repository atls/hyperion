import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'

import { containerStyles }     from './container.css.js'

export const Container = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={clsx(className, containerStyles)} {...props}>
    {children}
  </div>
)
