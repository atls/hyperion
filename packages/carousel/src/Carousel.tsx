import styled                                 from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'
import { Swipeable }                          from 'react-swipeable'
import { layout }                             from 'styled-system'

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

const defaultTheme = {
  colors: {
    white: '#fff',
  },
  shadows: {
    controls: '0 0 10px rgba(0,0,0,0.5)',
  },
  borders: {
    controls: '2px solid black',
  },
}

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
}) => {
  const [enableTransition, setEnableTransition] = useState(true)
  const [innerWidth, setInnerWidth] = useState(null)
  const [fullWidth, setFullWidth] = useState(null)
  const [childWidth, setChildWidth] = useState(null)
  const [buttonLeftDisabled, setButtonLeftDisabled] = useState(true)
  const [buttonRightDisabled, setButtonRightDisabled] = useState(false)
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
    if (!disableButton && innerWidth === fullWidth) {
      setButtonRightDisabled(true)
    }
    if (!disableButton && innerWidth !== fullWidth) {
      setButtonRightDisabled(false)
    }
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

    if (!disableButton) {
      if (newLeft >= -10) {
        setButtonLeftDisabled(true)
      } else {
        setButtonLeftDisabled(false)
      }

      if (fullWidth <= innerWidth - newLeft + 10) {
        setButtonRightDisabled(true)
      } else {
        setButtonRightDisabled(false)
      }
    }

    if (newLeft >= 2) {
      setLeft(0)
      return
    }

    if (fullWidth <= innerWidth - newLeft - 2) {
      setLeft(innerWidth - fullWidth)
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

    if (newLeft >= 0) {
      setButtonLeftDisabled(true)
      setButtonRightDisabled(false)
      setLeft(0)
      return
    }
    if (innerWidth - newLeft >= fullWidth) {
      setButtonRightDisabled(true)
      setButtonLeftDisabled(false)
      setLeft(innerWidth - fullWidth)
      return
    }

    setButtonRightDisabled(false)
    setButtonLeftDisabled(false)
    setLeft(newLeft)
  }

  return (
    <Container show={children.length !== 0}>
      <SlideButton
        onClick={() => handleClick('left')}
        disabled={disableButton || buttonLeftDisabled}
        width={controlWidth}
        height={controlHeight}
        left={controlLeft}
        top={controlTop}
        isSquareControls={isSquareControls}
        theme={defaultTheme}
      >
        {!isSquareControls && <ArrowBackwardIcon width={24} height={24} />}
        {isSquareControls && <ArrowLeftIcon width={20} height={10} />}
      </SlideButton>
      <Screen ref={containerNode} isOverflowHidden={isOverflowHidden} maxWidth='100%'>
        <Swipeable
          onSwiping={data => swiping(data)}
          onSwiped={() => setDeltaX(0)}
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
        disabled={disableButton || buttonRightDisabled}
        width={controlWidth}
        height={controlHeight}
        right={controlRight}
        top={controlTop}
        isSquareControls={isSquareControls}
        theme={defaultTheme}
      >
        {!isSquareControls && <ArrowForwardIcon width={24} height={24} />}
        {isSquareControls && <ArrowRightIcon width={20} height={10} />}
      </SlideButton>
    </Container>
  )
}
