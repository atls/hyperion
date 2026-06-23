import type { ReactNode }        from 'react'
import type { HTMLAttributes }   from 'react'

import { clsx }                  from 'clsx'

import { basePlaceholderStyles } from './styles.css.js'

export const Placeholder = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): ReactNode => (
  <span className={clsx(className, basePlaceholderStyles)} {...props}>
    {children}
  </span>
)
