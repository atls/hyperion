import React                                from 'react'
import { useRef }                           from 'react'
import { useMemo }                          from 'react'
import styled                               from '@emotion/styled'

import { motion }                           from 'framer-motion'

import { createContainerBaseStyles }        from './container'
import { createSlideBaseStyles }            from './slide'
import { createWrapperBaseStyles }          from './wrapper'
import { createWrapperPositionStyles }      from './wrapper'
import { createPaginationBaseStyles }       from './pagination'
import { createPaginationShapeStyles }      from './pagination'
import { createPaginationAppearanceStyles } from './pagination'
import { createNavigationBaseStyles }       from './navigation'
import { createNavigationShapeStyles }      from './navigation'
import { createNavigationAppearanceStyles } from './navigation'
import { createNavigationPositionStyles }   from './navigation'
import { useCarousel }                      from './hooks'
import { useAddonPagination }               from './hooks'
import { useAddonNavigation }               from './hooks'

export default { title: 'Components/Carousel', parameters: { layout: 'fullscreen' } }

export const Carousel = ({
  slidesPerView,
  loop,
  direction,
  navigation,
  pagination,
  centered,
  spaceBetween,
  size,
  dragElastic,
  transitionDuration,
  swipeThreshold,
  dotSize,
  margin,
  borderWidth,
  activeBorderWidth,
  borderRadius,
  backgroundColor,
  borderColor,
  activeBackgroundColor,
  activeBorderColor,
}) => {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)

  const Slide = useMemo(() => styled.div(createSlideBaseStyles()), [])

  const items = [...Array(size).keys()].map((number) => (
    <Slide style={{ background: 'white' }}>{number}</Slide>
  ))

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

  const Container = useMemo(() => styled.div(createContainerBaseStyles()), [])

  const Wrapper = useMemo(
    () => styled(motion.div)(createWrapperBaseStyles(), createWrapperPositionStyles()),
    []
  )

  const Navigation = useMemo(
    () =>
      styled.div(
        createNavigationBaseStyles(),
        createNavigationShapeStyles({
          width: 50,
        }),
        createNavigationAppearanceStyles({
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }),
        createNavigationPositionStyles()
      ),
    []
  )

  const Pagination = useMemo(
    () =>
      styled.div(
        createPaginationBaseStyles(),
        createPaginationShapeStyles({
          size: dotSize,
          margin,
          borderWidth,
          activeBorderWidth,
          borderRadius,
        }),
        createPaginationAppearanceStyles({
          backgroundColor,
          borderColor,
          activeBackgroundColor,
          activeBorderColor,
        })
      ),
    [
      dotSize,
      margin,
      borderWidth,
      activeBorderWidth,
      borderRadius,
      backgroundColor,
      borderColor,
      activeBackgroundColor,
      activeBorderColor,
    ]
  )

  const Arrow = (props) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
      width='30px'
      height='30px'
      {...props}
    >
      <path
        fill='black'
        d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'
      />
    </svg>
  )

  return (
    <div style={{ width: '100%', height: 300 }}>
      <Container ref={containerRef} style={{ backgroundColor: '#eee' }}>
        {navigation && (
          <>
            <Navigation attach='prev' fill='true' {...prevProp}>
              <Arrow style={{ transform: 'rotate(180deg)' }} />
            </Navigation>
            <Navigation attach='next' fill='true' {...nextProp}>
              <Arrow />
            </Navigation>
          </>
        )}
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
          {pagination && withPagination(Pagination)}
        </div>
      </Container>
    </div>
  )
}

Carousel.args = {
  slidesPerView: 2,
  direction: 'horizontal',
  navigation: true,
  pagination: true,
  centered: true,
  loop: false,
  spaceBetween: 30,
  size: 5,
  dragElastic: 0.5,
  transitionDuration: 0.5,
  swipeThreshold: 10000,
  dotSize: 16,
  margin: 10,
  borderWidth: 0,
  activeBorderWidth: 2,
  borderRadius: 8,
  backgroundColor: 'grey',
  borderColor: 'grey',
  activeBackgroundColor: 'blue',
  activeBorderColor: 'blue',
}

Carousel.argTypes = {
  slidesPerView: {
    name: 'Колличество слайдов',
    description: 'Колличество слайдов',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'number',
      min: 1,
    },
  },
  loop: {
    name: 'По кругу',
    description: 'По кругу',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    options: [true, false],
    control: {
      type: 'inline-radio',
    },
  },
  centered: {
    name: 'По центру',
    description: 'По центру',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    options: [true, false],
    control: {
      type: 'inline-radio',
    },
  },
  navigation: {
    name: 'Навигация',
    description: 'Навигация',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    options: [true, false],
    control: {
      type: 'inline-radio',
    },
  },
  pagination: {
    name: 'Нумерация слайдов',
    description: 'pagination',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    options: [true, false],
    control: {
      type: 'inline-radio',
    },
  },
  direction: {
    name: 'Направление',
    description: 'Направление',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    options: ['horizontal', 'vertical'],
    control: {
      type: 'inline-radio',
    },
  },
  spaceBetween: {
    name: 'Отступ',
    description: 'Отступ между слайдами',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'number',
      min: 0,
    },
  },
  size: {
    name: 'Колличество слайдов',
    description: 'Колличество слайдов',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'number',
      min: 1,
    },
  },
  transitionDuration: {
    name: 'Продолжительность анимации',
    description: 'Продолжительность анимации перехода',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'number',
      min: 0,
    },
  },
  dragElastic: {
    name: 'Эластичность',
    description: 'Эластичность перетаскивания',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'number',
      min: 0,
    },
  },
  swipeThreshold: {
    name: 'Порог перетаскивания',
    description: 'Порог перетаскивания слайда',
    table: {
      category: 'Модификаторы',
      subcategory: 'Контент',
    },
    control: {
      type: 'number',
      min: 0,
    },
  },
  dotSize: {
    name: 'Размер',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'number',
      min: 1,
    },
  },
  margin: {
    name: 'Отступы',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'number',
      min: 0,
    },
  },
  borderWidth: {
    name: 'Размер обводки',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'number',
      min: 0,
    },
  },
  activeBorderWidth: {
    name: 'Размер обводки активной',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'number',
      min: 0,
    },
  },
  borderRadius: {
    name: 'Скругление обводки',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'number',
      min: 0,
    },
  },
  backgroundColor: {
    name: 'Цвет заливки',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'color',
    },
  },
  activeBackgroundColor: {
    name: 'Цвет заливки активной',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'color',
    },
  },
  borderColor: {
    name: 'Цвет обводки',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'color',
    },
  },
  activeBorderColor: {
    name: 'Цвет обводки активной',
    table: {
      category: 'Нумерация слайдов',
    },
    control: {
      type: 'color',
    },
  },
}
