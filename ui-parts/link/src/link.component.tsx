'use client'

import NextLink              from 'next/link.js'
import React                 from 'react'
import { PropsWithChildren } from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { LinkSprinkles }     from './link.css.js'
import { LinkProps }         from './link.interfaces.js'
import { baseLinkStyles }    from './link.css.js'
import { linkSprinkles }     from './link.css.js'

const BaseLink = NextLink.default

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps & LinkSprinkles>>((
  { children, path, ...props },
  ref
) => {
  const { className, style, otherProps } = linkSprinkles(props)

  return (
    <BaseLink
      ref={ref}
      href={path}
      {...otherProps}
      className={clsx(baseLinkStyles, otherProps?.className, className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </BaseLink>
  )
})
