import type { AddonInputOptions }        from '../use-carousel/index.js'
import type { UseAddonNavigationResult } from './use-addon-navigation.interfaces.js'

import { useMemo }                       from 'react'

export const useAddonNavigation = ({
  slidesLength,
  slidesPerView,
  activeSlide,
  slideTo,
  slideToTwo,
  centered,
  loop,
}: AddonInputOptions): UseAddonNavigationResult =>
  useMemo(() => {
    if (centered && slidesLength <= 1) return {}
    if (!centered && !loop && slidesLength < slidesPerView + 1) return {}

    const onClick = (index: number): void => {
      if (loop && slideToTwo) {
        if (index < activeSlide && activeSlide === slidesPerView) {
          slideToTwo([
            { index: slidesLength + slidesPerView },
            { index: slidesLength + slidesPerView - 1 },
          ])

          return
        }
        if (index > activeSlide && activeSlide === slidesLength + slidesPerView - 1) {
          slideToTwo([{ index: slidesPerView - 1 }, { index: slidesPerView }])

          return
        }
      }

      slideTo(index)
    }

    return {
      prevProp: {
        show: loop || activeSlide > 0,
        onClick: (): void => {
          onClick(activeSlide - 1)
        },
      },
      nextProp: {
        show: loop || slidesLength > activeSlide + (centered ? 1 : slidesPerView),
        onClick: (): void => {
          onClick(activeSlide + 1)
        },
      },
    }
  }, [slidesLength, slidesPerView, activeSlide, slideTo, slideToTwo, centered, loop])
