import Image                      from 'next/image.js'
import React                      from 'react'
import { clsx }                   from 'clsx'
import { forwardRef }             from 'react'

import { NextImageProps }         from './next-image.interfaces.js'
import { nextImageWrapperStyles } from './next-image.css.js'

const BaseImage = Image.default

export const NextImage = forwardRef<HTMLImageElement, NextImageProps>((
  { wrapperClassName, ...props },
  ref
) => (
  <div className={clsx(nextImageWrapperStyles, wrapperClassName)}>
    <BaseImage ref={ref} {...props} />
  </div>
))
