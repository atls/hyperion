import { injectGlobal }         from '@emotion/css'

import React                    from 'react'
import { Swiper as BaseSwiper } from 'swiper/react'
import { SwiperProps }          from 'swiper/react'

import { STYLES }               from './swiper.styles'

let wasInjected = false

const Swiper = (props: SwiperProps) => {
  if (!wasInjected) {
    injectGlobal(STYLES)
    wasInjected = true
  }

  return <BaseSwiper {...props} />
}

export * from 'swiper/react'
export { Swiper }
