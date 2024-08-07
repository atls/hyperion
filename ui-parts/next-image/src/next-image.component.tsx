import Image                      from 'next/image.js'
import React                      from 'react'
import { clsx }                   from 'clsx'
import { forwardRef }             from 'react'

import { NextImageProps }         from './next-image.interfaces.js'
import { nextImageWrapperStyles } from './next-image.css.js'

export const NextImage = forwardRef<HTMLImageElement, NextImageProps>((
  { wrapperClassName, ...props },
  ref
) => (
  <div className={clsx(nextImageWrapperStyles, wrapperClassName)}>
    <Image.default ref={ref} {...props} />
  </div>
))
