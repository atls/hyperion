import { Meta }               from '@storybook/react'
import { StoryObj }           from '@storybook/react'

import React                  from 'react'
import { FC }                 from 'react'
import { SVGProps }           from 'react'
import { useRef }             from 'react'

import { Condition }          from '@atls-ui-parts/condition'
import { Box }                from '@atls-ui-parts/layout'

import { Container }          from './container/index.js'
import { Navigation }         from './navigation/index.js'
import { Pagination }         from './pagination/index.js'
import { PaginationProps }    from './pagination/index.js'
import { Slide }              from './slide/index.js'
import { Wrapper }            from './wrapper/index.js'
import { useAddonNavigation } from './hooks/index.js'
import { useAddonPagination } from './hooks/index.js'
import { useCarousel }        from './hooks/index.js'

const StoryArrow: FC<SVGProps<SVGSVGElement>> = (props) => (
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

interface CarouselStoryProps {
  slidesPerView: number
  loop: boolean
  centered: boolean
  navigation: boolean
  pagination: boolean
  direction: 'horizontal' | 'vertical'
  spaceBetween: number
  size: number
  transitionDuration: number
  dragElastic: number
  swipeThreshold: number
  dotSize: number
  margin: number
  borderWidth: number
  activeBorderWidth: number
  borderRadius: number
  borderColor: string
  backgroundColor: string
  activeBackgroundColor: string
  activeBorderColor: string
}

const meta: Meta<CarouselStoryProps> = {
  title: 'Components/Carousel',
  render: ({
    slidesPerView,
    loop,
    centered,
    navigation,
    pagination,
    direction,
    spaceBetween,
    size,
    transitionDuration,
    dragElastic,
    swipeThreshold,
    dotSize,
    margin,
    borderWidth,
    activeBorderWidth,
    borderRadius,
    borderColor,
    backgroundColor,
    activeBackgroundColor,
    activeBorderColor,
  }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const Slides = Array.from({ length: size }, (_, index) => (
      <Slide key={index} style={{ background: 'white' }}>
        {index}
      </Slide>
    ))

    const { slides, activeSlide, slidesLength, slideToIndex, slideToTwoIndexes, wrapperOptions } =
      useCarousel({
        ref: containerRef,
        items: Slides,
        options: {
          direction,
          slidesPerView,
          spaceBetween,
          dragElastic,
          transitionDuration,
          swipeThreshold,
          centered,
          loop,
        },
      })

    const paginationProps: PaginationProps = {
      size: `${dotSize}px`,
      margin: `${margin}px`,
      borderWidth: `${borderWidth}px`,
      borderRadius: `${borderRadius}px`,
      backgroundColor,
      borderColor,
      activeStyleOptions: {
        borderWidth: `${activeBorderWidth}px`,
        backgroundColor: activeBackgroundColor,
        borderColor: activeBorderColor,
      },
    }

    const withPagination = useAddonPagination({
      slidesLength,
      activeSlide,
      slideTo: slideToIndex,
      slidesPerView,
      centered,
      loop,
      props: paginationProps,
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

    return (
      <Box
        width='100%'
        height='300px'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Container ref={containerRef} style={{ backgroundColor: '#eee' }}>
          <Condition match={navigation}>
            <Navigation
              width='50px'
              backgroundColor='rgba(0, 0, 0, 0)'
              attach='prev'
              fill
              {...prevProp}
            >
              <StoryArrow style={{ transform: 'rotate(180deg)' }} />
            </Navigation>
            <Navigation
              width='50px'
              backgroundColor='rgba(0, 0, 0, 0)'
              attach='next'
              fill
              {...nextProp}
            >
              <StoryArrow />
            </Navigation>
          </Condition>
          <Wrapper ref={wrapperRef} direction={direction} {...wrapperOptions}>
            {slides}
          </Wrapper>
          <Condition match={pagination}>
            <Box width='100%' position='absolute' bottom={0} justifyContent='center'>
              {withPagination(Pagination)}
            </Box>
          </Condition>
        </Container>
      </Box>
    )
  },
  tags: ['autodocs'],
  argTypes: {
    slidesPerView: {
      name: 'Колличество слайдов',
      description: 'Колличество слайдов',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'number', min: 1 },
    },
    loop: {
      name: 'По кругу',
      description: 'По кругу',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'boolean' },
    },
    centered: {
      name: 'По центру',
      description: 'По центру',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'boolean' },
    },
    navigation: {
      name: 'Навигация',
      description: 'Навигация',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'boolean' },
    },
    pagination: {
      name: 'Нумерация слайдов',
      description: 'pagination',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'boolean' },
    },
    direction: {
      name: 'Направление',
      description: 'Направление',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
    },
    spaceBetween: {
      name: 'Отступ',
      description: 'Отступ между слайдами',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'number', min: 0 },
    },
    size: {
      name: 'Колличество слайдов',
      description: 'Колличество слайдов',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'number', min: 1 },
    },
    transitionDuration: {
      name: 'Продолжительность анимации',
      description: 'Продолжительность анимации перехода',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'number', min: 0 },
    },
    dragElastic: {
      name: 'Эластичность',
      description: 'Эластичность перетаскивания',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'number', min: 0 },
    },
    swipeThreshold: {
      name: 'Порог перетаскивания',
      description: 'Порог перетаскивания слайда',
      table: {
        category: 'Модификаторы',
        subcategory: 'Контент',
      },
      control: { type: 'number', min: 0 },
    },
    dotSize: {
      name: 'Размер',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'number', min: 1 },
    },
    margin: {
      name: 'Отступы',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'number', min: 0 },
    },
    borderWidth: {
      name: 'Размер обводки',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'number', min: 0 },
    },
    activeBorderWidth: {
      name: 'Размер обводки активной',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'number', min: 0 },
    },
    borderRadius: {
      name: 'Скругление обводки',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'number', min: 0 },
    },
    backgroundColor: {
      name: 'Цвет заливки',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'color' },
    },
    activeBackgroundColor: {
      name: 'Цвет заливки активной',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'color' },
    },
    borderColor: {
      name: 'Цвет обводки',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'color' },
    },
    activeBorderColor: {
      name: 'Цвет обводки активной',
      table: {
        category: 'Нумерация слайдов',
      },
      control: { type: 'color' },
    },
  },
}

export default meta

export const Carousel: StoryObj<CarouselStoryProps> = {
  args: {
    slidesPerView: 2,
    loop: false,
    centered: true,
    navigation: true,
    pagination: true,
    direction: 'horizontal',
    spaceBetween: 30,
    size: 5,
    transitionDuration: 0.5,
    dragElastic: 0.5,
    swipeThreshold: 10000,
    dotSize: 16,
    margin: 10,
    borderWidth: 0,
    activeBorderWidth: 2,
    borderRadius: 8,
    borderColor: 'grey',
    backgroundColor: 'grey',
    activeBackgroundColor: 'blue',
    activeBorderColor: 'blue',
  },
}
