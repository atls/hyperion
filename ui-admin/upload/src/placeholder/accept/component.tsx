import type { ReactNode }      from 'react'
import type { HTMLAttributes } from 'react'

import { clsx }                from 'clsx'

import { baseAcceptStyles }    from './styles.css.js'

export const PlaceholderAccept = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): ReactNode => (
  <span className={clsx(className, baseAcceptStyles)} {...props}>
    {children}
  </span>
)
