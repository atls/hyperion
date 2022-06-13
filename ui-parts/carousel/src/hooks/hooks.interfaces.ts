import { MotionProps }  from 'framer-motion'
import { ReactElement } from 'react'
import { ReactNode }    from 'react'
import { RefObject }    from 'react'

export type CarouselDirectionType = 'horizontal' | 'vertical'
export type SlydeToTwoIndexesArrayType = {
  index: number
  offset?: number
}
export type CarouselSlydeToIndexType = (index: number, duration?: number) => void

export type CarouselSlydeToTwoIndexesType = (
  indexes: Array<SlydeToTwoIndexesArrayType>
) => Promise<void>

export interface UseCarouselOptionsType {
  direction: CarouselDirectionType
  slidesPerView: number
  spaceBetween?: number
  dragElastic?: number
  transitionDuration?: number
  swipeThreshold?: number
  centered?: boolean
  loop?: boolean
}

export interface UseCarouselResult {
  slides: ReactNode[] | boolean
  slideToIndex: CarouselSlydeToIndexType
  slideToTwoIndexes: CarouselSlydeToTwoIndexesType
  activeSlide: number
  slidesLength: number
  wrapperOptions: MotionProps
}

export type UseCarouselProp = (
  ref: RefObject<HTMLDivElement>,
  items: ReactElement[],
  options: UseCarouselOptionsType
) => UseCarouselResult

export interface AddonInputProps {
  slidesLength: number
  slidesPerView: number
  activeSlide: number
  slideTo: CarouselSlydeToIndexType
  slideToTwo?: CarouselSlydeToTwoIndexesType
  centered?: boolean
  loop?: boolean
}

export interface UseAddonNavigationResult {
  nextProp?: {
    show: boolean
    onClick: () => void
  }
  prevProp?: {
    show: boolean
    onClick: () => void
  }
}

export type UseAddonPaginationResult = (dot: any) => ReactNode[] | null
