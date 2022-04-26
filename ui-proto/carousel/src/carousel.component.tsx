import React                     from 'react'
import { Children }              from 'react'
import { useRef }                from 'react'
import { useEffect }             from 'react'

import { CarouselDirectionType } from '@atls-ui-parts/carousel'
import { useAddonNavigation }    from '@atls-ui-parts/carousel'
import { useAddonPagination }    from '@atls-ui-parts/carousel'
import { useCarousel }           from '@atls-ui-parts/carousel'

import { Container }             from './container.component'
import { Navigation }            from './navigation.component'
import { Pagination }            from './pagination.component'
import { Slide }                 from './slide.component'
import { Wrapper }               from './wrapper.component'

export const Carousel = ({
  children,
  direction = 'horizontal' as CarouselDirectionType,
  slidesPerView = 1,
  spaceBetween = 30,
  dragElastic = 0.5,
  transitionDuration = 0.5,
  swipeThreshold = 10000,
  centered = true,
  loop = true,
  timeout = 3000,
}) => {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)

  const items = Children.map(children, (child) => <Slide>{child}</Slide>)

  const { slides, activeSlide, slidesLength, slideToIndex, slideToTwoIndexes, wrapperOptions } =
    useCarousel(containerRef, items, {
      direction,
      slidesPerView,
      spaceBetween,
      dragElastic,
      transitionDuration,
      swipeThreshold,
      centered,
      loop,
    })

  const withPagination = useAddonPagination({
    slidesLength,
    activeSlide,
    slideTo: slideToIndex,
    slidesPerView,
    centered,
    loop,
  })

  const { prevProp, nextProp } = useAddonNavigation({
    slidesLength,
    activeSlide,
    slideTo: slideToIndex,
    slideToTwo: slideToTwoIndexes,
    slidesPerView,
    centered,
    loop,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      slideToIndex(activeSlide === slidesLength ? 1 : activeSlide + 1)
    }, timeout)

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [timeout, activeSlide, slidesLength, slideToIndex])

  return (
    <Container ref={containerRef} style={{ backgroundColor: '#eee' }}>
      <>
        <Navigation attach='prev' fill='true' {...prevProp}>
          {'<'}
        </Navigation>
        <Navigation attach='next' fill='true' {...nextProp}>
          {'>'}
        </Navigation>
      </>
      <Wrapper ref={wrapperRef} direction={direction} {...wrapperOptions}>
        {slides}
      </Wrapper>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {withPagination(Pagination)}
      </div>
    </Container>
  )
}
