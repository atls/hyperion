import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'

import { baseIconStyles }      from './styles.css.js'

export const PlaceholderIcon = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): ReactNode => (
  <span className={clsx(className, baseIconStyles)} {...props}>
    {children}
  </span>
)
