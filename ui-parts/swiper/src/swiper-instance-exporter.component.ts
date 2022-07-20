import { useSwiper } from 'swiper/react'

const SwiperInstanceExporter = ({ swiper, setSwiper }) => {
  const swiperInstance = useSwiper()

  if (!swiper) setSwiper(swiperInstance)

  return null
}

export { SwiperInstanceExporter }
