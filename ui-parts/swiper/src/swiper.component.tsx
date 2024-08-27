import 'swiper/css'

import { FC }          from 'react'
import { Swiper }      from 'swiper/react'
import { SwiperProps } from 'swiper/react'
import React           from 'react'

export const BaseSwiper: FC<SwiperProps> = ({ width, style, ...props }) => (
  <Swiper
    width={width}
    style={{ display: 'flex', maxWidth: width ?? '100vw', ...style }}
    {...props}
  />
)
