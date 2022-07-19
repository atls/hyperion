import { injectGlobal }         from '@emotion/css'

import React                    from 'react'
import { Swiper as BaseSwiper } from 'swiper/react'
import { SwiperProps }          from 'swiper/react'

import { STYLES }               from './swiper.styles'

const Swiper = (props: SwiperProps) => {
  injectGlobal(STYLES)
  injectGlobal(`.swiper {
    max-width: 100vw;
    display: flex;
  }`)

  return <BaseSwiper {...props} />
}

export * from 'swiper/react'
export { Swiper }
