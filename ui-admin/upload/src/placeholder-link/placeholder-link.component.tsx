import React                         from 'react'
import { FC }                        from 'react'
import { AnchorHTMLAttributes }      from 'react'
import { clsx }                      from 'clsx'

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
