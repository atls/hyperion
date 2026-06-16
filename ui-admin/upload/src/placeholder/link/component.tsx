import type { ReactNode }            from 'react'
import type { AnchorHTMLAttributes } from 'react'

import { clsx }                      from 'clsx'

import { baseLinkStyles }            from './styles.css.js'

export const PlaceholderLink = ({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>): ReactNode => (
  <a className={clsx(className, baseLinkStyles)} {...props}>
    {children}
  </a>
)
