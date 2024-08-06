import { MotionProps }  from 'framer-motion'
import { ReactElement } from 'react'
import { ReactNode }    from 'react'
import { RefObject }    from 'react'

export type CarouselDirection = 'horizontal' | 'vertical'

export interface SlideToTwoIndexesArray {
  index: number
  offset?: number
}

export type CarouselSlideToIndex = (index: number, duration?: number) => void

export type CarouselSlideToTwoIndexes = (indexes: SlideToTwoIndexesArray[]) => Promise<void>

export interface AddonInputOptions {
  slidesLength: number
  slidesPerView: number
  activeSlide: number
  slideTo: CarouselSlideToIndex
  slideToTwo?: CarouselSlideToTwoIndexes
  centered?: boolean
  loop?: boolean
  props?: Record<string, any>
}

export interface UseCarouselOptions {
  direction: CarouselDirection
  slidesPerView: number
  spaceBetween?: number
  dragElastic?: number
  transitionDuration?: number
  swipeThreshold?: number
  centered?: boolean
  loop?: boolean
}

export interface UseCarouselProps {
  ref: RefObject<HTMLDivElement>
  items: ReactElement[]
  options: UseCarouselOptions
}

export interface UseCarouselResult {
  slides: ReactNode[] | boolean
  slideToIndex: CarouselSlideToIndex
  slideToTwoIndexes: CarouselSlideToTwoIndexes
  activeSlide: number
  slidesLength: number
  wrapperOptions: MotionProps
}
