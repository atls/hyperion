'use client'

import type { ReactNode } from 'react'

import type { LinkProps } from './link.interfaces.js'

import { clsx }           from 'clsx'
import NextLink           from 'next/link.js'
import React              from 'react'

import { baseLinkStyles } from './link.css.js'
import { linkSprinkles }  from './link.css.js'

const BaseLink = NextLink.default

export const Link = ({ children, href, ref, ...props }: LinkProps): ReactNode => {
  const { className, style, otherProps } = linkSprinkles(props)

  return (
    <BaseLink
      ref={ref}
      href={href}
      {...otherProps}
      className={clsx(baseLinkStyles, String(otherProps?.className || ''), className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </BaseLink>
  )
}
