import type { ReactNode }         from 'react'

import type { NextImageProps }    from './next-image.interfaces.js'

import { clsx }                   from 'clsx'
import Image                      from 'next/image.js'
import React                      from 'react'

import { nextImageWrapperStyles } from './next-image.css.js'

const BaseImage = Image.default

export const NextImage = ({ wrapperClassName, ref, ...props }: NextImageProps): ReactNode => (
  <div className={clsx(nextImageWrapperStyles, wrapperClassName)}>
    <BaseImage ref={ref} {...props} />
  </div>
)
