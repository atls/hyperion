import React, { useEffect, useRef, useState }  from 'react'
import { Swipeable }                           from 'react-swipeable'
import { layout }                              from 'styled-system'
import { ifProp }                              from 'styled-tools'

import styled                                  from '@emotion/styled'
import { ArrowBackwardIcon, ArrowForwardIcon } from '@atlantis-lab/icons'
import { contentWidth, widthWithMargin }       from '@atlantis-lab/utils'

import { SlideButton }                         from './SlideButton'
import { CarouselProps }                       from './types'

const transition = ifProp('transition', { transition: '0.3s' })

const StyledCarousel = styled.div<CarouselProps>(
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    '&:focus': {
      pointerEvents: 'none',
    },
  },
  transition
)

const Container = styled.div<any>(({ show }) => ({
  width: '100%',
  display: show ? 'flex' : 'none',
  position: 'relative',
}))

const Screen = styled.div(
  {
    display: 'flex',
  },
  layout
)

export const Carousel = ({ children, disableButton = false, step = 1, halfControls }) => {
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
      Array.prototype.map.call(screenNode.current.children, item => widthWithMargin(item))
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
    setTimeout(() => {
      setWidth()
    }, 100)
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
        direction={halfControls ? 'none' : 'left'}
        halfControls={halfControls ? 'left' : 'none'}
      >
        <ArrowBackwardIcon width={24} height={24} />
      </SlideButton>
      <Screen ref={containerNode} maxWidth='100%'>
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
        direction={halfControls ? 'none' : 'right'}
        halfControls={halfControls ? 'right' : 'none'}
      >
        <ArrowForwardIcon width={24} height={24} />
      </SlideButton>
    </Container>
  )
}
