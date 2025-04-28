/* eslint-disable @next/next/no-img-element */

import type { ReactNode }  from 'react'

import type { ImageProps } from './image.interfaces.js'

import { clsx }            from 'clsx'
import React               from 'react'

import { baseImageStyles } from './image.css.js'
import { imageSprinkles }  from './image.css.js'

export const Image = ({ alt, width, height, ref, ...props }: ImageProps): ReactNode => {
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
}
