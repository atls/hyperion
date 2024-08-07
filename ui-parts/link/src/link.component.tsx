'use client'

import NextLink              from 'next/link.js'
import React                 from 'react'
import { PropsWithChildren } from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { LinkProps }         from './link.interfaces.js'
import { LinkSprinkles }     from './link.styles.css.js'
import { baseLinkStyles }    from './link.styles.css.js'
import { linkSprinkles }     from './link.styles.css.js'

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps & LinkSprinkles>>((
  { children, path, ...props },
  ref
) => {
  const { className, style, otherProps } = linkSprinkles(props)

  return (
    <NextLink.default href={path}>
      <a
        ref={ref}
        {...otherProps}
        className={clsx(baseLinkStyles, otherProps?.className, className)}
        style={{ ...style, ...otherProps?.style }}
      >
        {children}
      </a>
    </NextLink.default>
  )
})
