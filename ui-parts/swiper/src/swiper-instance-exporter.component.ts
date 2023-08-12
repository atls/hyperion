import { useSwiper } from 'swiper/react'

export const SwiperInstanceExporter = ({ swiper, setSwiper }) => {
  const swiperInstance = useSwiper()

  if (!swiper) setSwiper(swiperInstance)

  return null
}
