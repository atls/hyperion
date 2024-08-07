import 'swiper/css'

import React           from 'react'
import { FC }          from 'react'
import { Swiper }      from 'swiper/react'
import { SwiperProps } from 'swiper/react'

export const BaseSwiper: FC<SwiperProps> = ({ width, style, ...props }) => {
  return (
    <Swiper
      width={width}
      style={{ display: 'flex', maxWidth: width ?? '100vw', ...style }}
      {...props}
    />
  )
}
