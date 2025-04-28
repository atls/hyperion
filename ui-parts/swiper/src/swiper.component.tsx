import 'swiper/css'

import type { ReactNode }   from 'react'
import type { SwiperProps } from 'swiper/react'

import { Swiper }           from 'swiper/react'
import React                from 'react'

export const BaseSwiper = ({ width, style, ...props }: SwiperProps): ReactNode => (
  <Swiper
    width={width}
    style={{ display: 'flex', maxWidth: width ?? '100vw', ...style }}
    {...props}
  />
)
