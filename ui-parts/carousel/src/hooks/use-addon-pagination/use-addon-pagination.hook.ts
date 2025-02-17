import type { ReactNode }                from 'react'

import type { AddonInputOptions }        from '../use-carousel/index.js'
import type { UseAddonPaginationResult } from './use-addon-pagination.interfaces.js'

import { createElement }                 from 'react'
import { useCallback }                   from 'react'

export const useAddonPagination = ({
  slidesLength,
  slidesPerView,
  activeSlide,
  slideTo,
  centered,
  loop,
  props,
}: AddonInputOptions): UseAddonPaginationResult => {
  const withPagination = useCallback(
    (Element: string) => {
      if (centered && slidesLength <= 1) return null
      if (!centered && !loop && slidesLength < slidesPerView + 1) return null

      const dots: Array<ReactNode> = []

      const onClick = (index: number): void => {
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
            onClick: () => {
              onClick(i)
            },
            ...props,
          })
        )
      }

      return dots
    },

    [slidesLength, activeSlide, slideTo, centered, loop, slidesPerView]
  )

  return withPagination
}
