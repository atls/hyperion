import type { FC }                   from 'react'
import type { AnchorHTMLAttributes } from 'react'

import { clsx }                      from 'clsx'
import React                         from 'react'

import { basePlaceholderLinkStyles } from './placeholder-link.css.js'

export const PlaceholderLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  className,
  ...props
}) => (
  <a className={clsx(className, basePlaceholderLinkStyles)} {...props}>
    {children}
  </a>
)
