'use client'

import type { LinkProps } from './link.interfaces.js'

import { clsx }           from 'clsx'
import { forwardRef }     from 'react'
import NextLink           from 'next/link.js'
import React              from 'react'

import { baseLinkStyles } from './link.css.js'
import { linkSprinkles }  from './link.css.js'

const BaseLink = NextLink.default

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((
  { children, path, ...props },
  ref
) => {
  const { className, style, otherProps } = linkSprinkles(props)

  return (
    <BaseLink
      ref={ref}
      href={path}
      {...otherProps}
      className={clsx(baseLinkStyles, String(otherProps?.className || ''), className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </BaseLink>
  )
})
