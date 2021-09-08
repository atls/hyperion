import { useMemo }                  from 'react'

import { AddonInputProps }          from './hooks.interfaces'
import { UseAddonNavigationResult } from './hooks.interfaces'

export const useAddonNavigation = ({
  slidesLength,
  slidesPerView,
  activeSlide,
  slideTo,
  slideToTwo,
  centered,
  loop,
}: AddonInputProps): UseAddonNavigationResult =>
  useMemo(() => {
    if (centered && slidesLength <= 1) return {}
    if (!centered && !loop && slidesLength < slidesPerView + 1) return {}

    const onClick = (index: number) => {
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
        onClick: () => onClick(activeSlide - 1),
      },
      nextProp: {
        show: loop || slidesLength > activeSlide + (centered ? 1 : slidesPerView),
        onClick: () => onClick(activeSlide + 1),
      },
    }
  }, [slidesLength, slidesPerView, activeSlide, slideTo, slideToTwo, centered, loop])
