import { Children }                            from 'react'
import { cloneElement }                        from 'react'
import { useState }                            from 'react'
import { useEffect }                           from 'react'
import { useCallback }                         from 'react'
import { useAnimation }                        from 'framer-motion'
import { DraggableProps }                      from 'framer-motion'
import { PanInfo }                             from 'framer-motion'

import { getContentDimensions, useWindowSize } from '@atls-ui-parts/dom'

import { UseCarouselProp }                     from './hooks.interfaces'
import { UseCarouselResult }                   from './hooks.interfaces'
import { CarouselSlydeToIndexType }            from './hooks.interfaces'
import { CarouselSlydeToTwoIndexesType }       from './hooks.interfaces'

const swipePower = (offset: number, velocity: number): number => Math.abs(offset) * velocity

export const useCarousel: UseCarouselProp = (
  ref,
  items,
  {
    direction = 'horizontal',
    slidesPerView = 1,
    spaceBetween = 0,
    dragElastic = 0.5,
    transitionDuration = 0.5,
    swipeThreshold = 10000,
    centered,
    loop,
  }
): UseCarouselResult => {
  const { innerWidth } = useWindowSize()
  const controls = useAnimation()
  const [wrapperSize, setWrapperSize] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [slidesLength, setSlidesLength] = useState(0)
  const [slideSize, setSlideSize] = useState(0)
  const [centeredOffset, setCenteredOffset] = useState(0)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const loopOffset = -slideSize - spaceBetween

    if (loop && slidesLength >= slidesPerView) {
      setActiveSlide(slidesPerView)

      controls.start({
        x:
          direction === 'horizontal'
            ? Number(centered && centeredOffset) + loopOffset * slidesPerView
            : 0,
        y:
          direction === 'vertical'
            ? Number(centered && centeredOffset) + loopOffset * slidesPerView
            : 0,
        transition: { duration: 0 },
      })
    } else {
      setActiveSlide(0)
      controls.start({
        x: centered && direction === 'horizontal' ? centeredOffset : 0,
        y: centered && direction === 'vertical' ? centeredOffset : 0,
        transition: { duration: 0 },
      })
    }
  }, [
    direction,
    slidesPerView,
    spaceBetween,
    centered,
    loop,
    slideSize,
    centeredOffset,
    slidesLength,
    controls,
  ])

  useEffect(() => {
    if (ref?.current) {
      const wrapperDimensions = getContentDimensions(ref.current)
      const defaultWrapperSize =
        direction === 'horizontal' ? wrapperDimensions.width : wrapperDimensions.height
      const defaultSlideSize =
        (defaultWrapperSize - spaceBetween * (slidesPerView - 1)) / slidesPerView

      setWrapperSize(defaultWrapperSize)
      setSlideSize(defaultSlideSize)

      if (centered) {
        setCenteredOffset(defaultWrapperSize / 2 - defaultSlideSize / 2)
      } else {
        setCenteredOffset(0)
      }
    }
  }, [ref, innerWidth, direction, slidesPerView, centered, spaceBetween])

  useEffect(() => {
    setSlidesLength(Children.count(items))
  }, [items])

  useEffect(() => {
    if (wrapperSize && slideSize && slidesLength) {
      setIsReady(true)
    }
  }, [wrapperSize, slideSize, slidesLength])

  const getSlides = useCallback(() => {
    const getSlideStyles = (num: number, length: number) => {
      if (direction === 'horizontal') {
        return {
          width: slideSize,
          margin: num !== length - 1 ? `0 ${spaceBetween}px 0 0` : 0,
        }
      }
      return {
        height: slideSize,
        margin: num !== length - 1 ? `0 0 ${spaceBetween}px 0` : 0,
      }
    }

    return Children.map(items, (item, num) =>
      cloneElement(item, {
        key: num,
        ...item.props,
        style: {
          ...item.props.style,
          ...getSlideStyles(num, slidesLength),
        },
      })
    )
  }, [items, direction, slideSize, slidesLength, spaceBetween])

  const getLoopSlides = useCallback(() => {
    const newItems = [...items]

    for (let i = 0; i < slidesPerView; i += 1) {
      newItems.push(items[i])
      newItems.unshift(items[items.length - 1 - i])
    }

    const getSlideStyles = () => {
      if (direction === 'horizontal') {
        return {
          width: slideSize,
          margin: `0 ${spaceBetween}px 0 0`,
        }
      }
      return {
        height: slideSize,
        margin: `0 0 ${spaceBetween}px 0`,
      }
    }

    return Children.map(newItems, (item, num) =>
      cloneElement(item, {
        key: num - 1,
        ...item.props,
        style: {
          ...item.props.style,
          ...getSlideStyles(),
        },
      })
    )
  }, [items, direction, slideSize, slidesPerView, spaceBetween])

  const slideToIndex: CarouselSlydeToIndexType = (index, duration = transitionDuration) => {
    const valueAnimateTo =
      (index * -wrapperSize) / slidesPerView -
      (spaceBetween / slidesPerView) * index +
      centeredOffset

    controls.start({
      x: (direction === 'horizontal' && valueAnimateTo) || 0,
      y: (direction === 'vertical' && valueAnimateTo) || 0,
      transition: { duration },
    })

    setActiveSlide(index)
  }

  const slideToTwoIndexes: CarouselSlydeToTwoIndexesType = async (indexes) => {
    const valueAnimateToFirst =
      (indexes[0].index * -wrapperSize) / slidesPerView -
      (spaceBetween / slidesPerView) * indexes[0].index +
      centeredOffset +
      (indexes[0].offset || 0) * dragElastic

    const valueAnimateToSecond =
      (indexes[1].index * -wrapperSize) / slidesPerView -
      (spaceBetween / slidesPerView) * indexes[1].index +
      centeredOffset

    await controls.start({
      x: (direction === 'horizontal' && valueAnimateToFirst) || 0,
      y: (direction === 'vertical' && valueAnimateToFirst) || 0,
      transition: { duration: 0 },
    })

    controls.start({
      x: (direction === 'horizontal' && valueAnimateToSecond) || 0,
      y: (direction === 'vertical' && valueAnimateToSecond) || 0,
      transition: { duration: transitionDuration },
    })

    setActiveSlide(indexes[1].index)
  }

  const onDragEnd = (e: any, { offset, velocity }: PanInfo): void => {
    const swipe =
      direction === 'horizontal'
        ? swipePower(offset.x, velocity.x)
        : swipePower(offset.y, velocity.y)

    if (swipe > swipeThreshold) {
      if (loop && activeSlide === slidesPerView) {
        slideToTwoIndexes([
          {
            index: slidesLength + slidesPerView,
            offset: direction === 'horizontal' ? offset.x : offset.y,
          },
          { index: slidesLength + slidesPerView - 1 },
        ])
        return
      }

      if (activeSlide === 0) return

      slideToIndex(activeSlide - 1)
    } else if (swipe < -swipeThreshold) {
      if (loop) {
        if (activeSlide === slidesLength + slidesPerView - 1) {
          slideToTwoIndexes([
            {
              index: slidesPerView - 1,
              offset: direction === 'horizontal' ? offset.x : offset.y,
            },
            { index: slidesPerView },
          ])
        } else {
          slideToIndex(activeSlide + 1)
        }
        return
      }

      if (centered) {
        if (activeSlide === slidesLength - 1) return
      } else if (activeSlide === slidesLength - slidesPerView || slidesLength < slidesPerView)
        return

      slideToIndex(activeSlide + 1)
    }
  }

  const getDragConstraints = (): DraggableProps => {
    const constraint =
      (activeSlide * -wrapperSize) / slidesPerView -
      (spaceBetween / slidesPerView) * activeSlide +
      centeredOffset

    if (direction === 'horizontal') {
      return {
        dragConstraints: {
          left: constraint,
          right: constraint,
        },
        drag: 'x',
      }
    }
    return {
      dragConstraints: {
        top: constraint,
        bottom: constraint,
      },
      drag: 'y',
    }
  }

  return {
    slides: isReady && (loop && slidesLength > slidesPerView ? getLoopSlides() : getSlides()),
    slideToIndex,
    slideToTwoIndexes,
    activeSlide,
    slidesLength,
    wrapperOptions: {
      animate: controls,
      onDragEnd,
      dragElastic,
      transition: { duration: transitionDuration },
      ...getDragConstraints(),
    },
  }
}
