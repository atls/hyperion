import Image                from 'next/image'
import React                from 'react'

import { NextImageWrapper } from './next-image.styles'

export const NextImage = ({ src, alt, ...props }) => (
  <NextImageWrapper>
    <Image src={src} alt={alt} {...props} />
  </NextImageWrapper>
)
