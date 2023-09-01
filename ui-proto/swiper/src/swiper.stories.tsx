/**
 * Full docs on https://swiperjs.com/
 * */

import React                    from 'react'

import { Swiper as BaseSwiper } from './'
import { SwiperSlide }          from './'

export default { title: 'Components/Swiper', parameters: { layout: 'fullscreen' } }

const Slide = ({ children }) => (
  <div
    style={{
      width: 300,
      display: 'flex',
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'orange',
    }}
  >
    {children}
  </div>
)

export const Swiper = () => (
  <BaseSwiper
    slidesPerView={3}
    loop
    spaceBetween={60}
    width={1920}
    grabCursor
    touchEventsTarget='container'
  >
    {[...Array(7)].map((i, idx) => (
      <SwiperSlide>
        <Slide>{idx}</Slide>
      </SwiperSlide>
    ))}
  </BaseSwiper>
)
