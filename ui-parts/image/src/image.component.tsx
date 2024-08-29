/* eslint-disable @next/next/no-img-element */

import type { PropsWithChildren } from 'react'
import type { ImgHTMLAttributes } from 'react'

import { clsx }                   from 'clsx'
import { forwardRef }             from 'react'
import React                      from 'react'

import { baseImageStyles }        from './image.css.js'
import { imageSprinkles }         from './image.css.js'

export const Image = forwardRef<
  HTMLImageElement,
  PropsWithChildren<ImgHTMLAttributes<HTMLImageElement>>
>(({ alt, width, height, ...props }, ref) => {
  const { className, style, otherProps } = imageSprinkles({ ...props, width, height })

  return (
    <img
      ref={ref}
      className={clsx(baseImageStyles, className, String(otherProps?.className || ''))}
      alt={alt}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      width={width}
      height={height}
    />
  )
})
