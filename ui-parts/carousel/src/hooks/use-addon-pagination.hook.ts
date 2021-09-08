import { createElement }            from 'react'
import { useCallback }              from 'react'

import { AddonInputProps }          from './hooks.interfaces'
import { UseAddonPaginationResult } from './hooks.interfaces'

export const useAddonPagination = ({
  slidesLength,
  slidesPerView,
  activeSlide,
  slideTo,
  centered,
  loop,
}: AddonInputProps): UseAddonPaginationResult => {
  const withPagination = useCallback(
    (Element) => {
      if (centered && slidesLength <= 1) return null
      if (!centered && !loop && slidesLength < slidesPerView + 1) return null

      const dots: any = []

      const onClick = (index: number) => {
        if (loop) {
          slideTo(index + slidesPerView)
          return
        }

        slideTo(index)
      }

      for (let i = 0; i < slidesLength - Number(!centered && !loop && slidesPerView - 1); i += 1) {
        dots.push(
          createElement(Element, {
            key: i,
            active: i === activeSlide - Number(loop && slidesPerView),
            onClick: () => onClick(i),
          })
        )
      }

      return dots
    },
    [slidesLength, activeSlide, slideTo, centered, loop, slidesPerView]
  )

  return withPagination
}
