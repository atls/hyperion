import React, { useEffect, useRef, useState } from 'react'
import { Swipeable }                          from 'react-swipeable'
import { layout }                             from 'styled-system'

import styled                                 from '@emotion/styled'
import {
  ArrowBackwardIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@atlantis-lab/icons'
import { contentWidth, widthWithMargin }      from '@atlantis-lab/utils'

import { SlideButton }                        from './SlideButton'
import { CarouselProps }                      from './types'

const StyledCarousel = styled.div<CarouselProps>(({ transition }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  transition: transition ? '0.3s' : '',
  height: 'auto',
  '&:focus': {
    pointerEvents: 'none',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}))

const Container = styled.div<any>(({ show }) => ({
  width: '100%',
  display: show ? 'flex' : 'none',
  position: 'relative',
}))

const Screen = styled.div(
  ({ isOverflowHidden }) => ({
    display: 'flex',
    overflow: isOverflowHidden ? 'hidden' : 'initial',
  }),
  layout
)

export const Carousel = ({
  children,
  disableButton = false,
  step = 1,
  controlWidth,
  controlHeight,
  controlRight,
  controlLeft,
  controlTop,
  isOverflowHidden,
  isSquareControls,
  theme,
}) => {
  const [enableTransition, setEnableTransition] = useState(true)
  const [innerWidth, setInnerWidth] = useState(null)
  const [fullWidth, setFullWidth] = useState(null)
  const [childWidth, setChildWidth] = useState(null)
  const [left, setLeft] = useState(0)
  const [deltaX, setDeltaX] = useState(0)
  const containerNode = useRef()
  const screenNode = useRef(null)

  const setWidth = () => {
    setInnerWidth(contentWidth(containerNode.current))
    setChildWidth(
      Array.prototype.map.call(screenNode.current && screenNode.current.children, item =>
        widthWithMargin(item)
      )
    )
  }

  useEffect(() => {
    setFullWidth(contentWidth(screenNode.current))
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth()
    }, 100)
    return () => clearTimeout(timeout)
  }, [fullWidth])

  useEffect(() => {
    if (!disableButton) {
      window.addEventListener('resize', setWidth)
      return () => window.removeEventListener('resize', setWidth)
    }
    return undefined
  }, [])

  const swiping = data => {
    if (innerWidth >= fullWidth) {
      return
    }
    const newLeft = deltaX - data.deltaX + left

    if (newLeft > 500) {
      setLeft(left)
      return
    }

    if (newLeft < innerWidth - fullWidth - 500) {
      setLeft(left)
      return
    }

    setDeltaX(data.deltaX)
    setLeft(newLeft)
    setEnableTransition(false)
  }

  const handleClick = direction => {
    let activeSlide = 0
    let activeLeft = 0
    for (;;) {
      if (left >= activeLeft && direction === 'left') break
      if (left > activeLeft && direction === 'right') break
      if (activeSlide > 100) break
      activeLeft -= childWidth[activeSlide]
      activeSlide += 1
    }
    setEnableTransition(true)
    let newLeft = 0
    if (direction === 'left') {
      childWidth.forEach((item, index) => {
        if (activeSlide - 1 - (step - 1) > index) {
          newLeft -= item
        }
      })
    }
    if (direction === 'right') {
      childWidth.forEach((item, index) => {
        if (activeSlide + (step - 1) > index) {
          newLeft -= item
        }
      })
    }

    if (left === 0 && newLeft >= 0) {
      setLeft(innerWidth - fullWidth)
      return
    }
    if (innerWidth - newLeft >= fullWidth) {
      if (left === innerWidth - fullWidth && innerWidth - newLeft > innerWidth - fullWidth) {
        setLeft(0)
        return
      }
      setLeft(innerWidth - fullWidth)
      return
    }

    setLeft(newLeft)
  }

  return (
    <Container show={children.length !== 0}>
      <SlideButton
        onClick={() => handleClick('left')}
        disabled={disableButton}
        width={controlWidth}
        height={controlHeight}
        left={controlLeft}
        top={controlTop}
        isSquareControls={isSquareControls}
        theme={theme}
      >
        {!isSquareControls && <ArrowBackwardIcon width={24} height={24} />}
        {isSquareControls && <ArrowLeftIcon width={20} height={10} />}
      </SlideButton>
      <Screen ref={containerNode} isOverflowHidden={isOverflowHidden} maxWidth='100%'>
        <Swipeable
          onSwiping={data => swiping(data)}
          onSwiped={() => {
            setDeltaX(0)
            if (left > 0) {
              setEnableTransition(true)
              setLeft(0)
              if (left === 0) setEnableTransition(false)
            }

            if (left <= innerWidth - fullWidth) {
              setEnableTransition(true)
              setLeft(innerWidth - fullWidth)
              if (left === innerWidth - fullWidth) setEnableTransition(false)
            }
          }}
          preventDefaultTouchmoveEvent
          trackMouse
          trackTouch
          delta={15}
        >
          <StyledCarousel ref={screenNode} style={{ left }} transition={enableTransition}>
            {children}
          </StyledCarousel>
        </Swipeable>
      </Screen>
      <SlideButton
        onClick={() => handleClick('right')}
        disabled={disableButton}
        width={controlWidth}
        height={controlHeight}
        right={controlRight}
        top={controlTop}
        isSquareControls={isSquareControls}
        theme={theme}
      >
        {!isSquareControls && <ArrowForwardIcon width={24} height={24} />}
        {isSquareControls && <ArrowRightIcon width={20} height={10} />}
      </SlideButton>
    </Container>
  )
}
