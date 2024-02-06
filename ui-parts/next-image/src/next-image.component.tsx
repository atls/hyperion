import Image                from 'next/image'
import React                from 'react'
import { FC }               from 'react'

import { NextImageProps }   from './next-image.interfaces'
import { NextImageWrapper } from './next-image.styles'

export const NextImage: FC<NextImageProps> = ({ src, alt, width, height, ...props }) => (
  <NextImageWrapper>
    <Image src={src} alt={alt} width={width} height={height} {...props} />
  </NextImageWrapper>
)
