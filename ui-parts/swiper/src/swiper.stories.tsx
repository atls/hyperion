/**
 * @docs https://swiperjs.com/
 */

import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { SwiperSlide }   from 'swiper/react'

import { Box }           from '@atls-ui-parts/layout'
import { Column }        from '@atls-ui-parts/layout'
import { Layout }        from '@atls-ui-parts/layout'

import { BaseSwiper }    from './swiper.component.js'

const meta: Meta = {
  title: 'Components/Swiper',
  render: () => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <BaseSwiper
        loop
        grabCursor
        slidesPerView={3}
        spaceBetween={60}
        width={1920}
        touchEventsTarget='container'
      >
        {Array.from({ length: 7 }, (_, index) => (
          <SwiperSlide key={index}>
            <Box
              width='300px'
              height='300px'
              justifyContent='center'
              alignItems='center'
              backgroundColor='$blueProtective'
            >
              {index}
            </Box>
          </SwiperSlide>
        ))}
      </BaseSwiper>
      <Layout flexBasis='50px' />
    </Column>
  ),
  tags: ['autodocs'],
}

export default meta

export const Swiper: StoryObj = {
  name: 'Базовый',
}
