import { injectGlobal }         from '@emotion/css'

import React                    from 'react'
import { FC }                   from 'react'
import { Swiper as BaseSwiper } from 'swiper/react'
import { SwiperProps }          from 'swiper/react'
import { nanoid }               from 'nanoid'
import { useMemo }              from 'react'

import { STYLES }               from './swiper.styles'

let wasGloballyInjected = false
const injectedClasses: string[] = []

const Swiper: FC<SwiperProps> = ({ width, className, ...props }) => {
  // eslint-disable-next-line
  const cn = useMemo(() => className || `swiper-${nanoid()}`, [])

  if (!wasGloballyInjected) {
    injectGlobal(STYLES)
    injectGlobal(`.swiper {
      display: flex;
    }`)
    wasGloballyInjected = true
  }

  if (!injectedClasses.includes(cn)) {
    if (width) {
      injectGlobal(`.${cn} {
        max-width: ${width}px;
      }`)
    } else {
      injectGlobal(`.${cn} {
        max-width: 100vw;
      }`)
    }

    injectedClasses.push(cn)
  }

  return <BaseSwiper width={width} className={cn} {...props} />
}

export * from 'swiper/react'
export { Swiper }
