import type { ReactNode }            from 'react'
import type { AnchorHTMLAttributes } from 'react'

import { clsx }                      from 'clsx'
import React                         from 'react'

import { basePlaceholderLinkStyles } from './placeholder-link.css.js'

export const PlaceholderLink = ({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>): ReactNode => (
  <a className={clsx(className, basePlaceholderLinkStyles)} {...props}>
    {children}
  </a>
)
