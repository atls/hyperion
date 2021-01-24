import styled                                     from '@emotion/styled'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Swipeable }                              from 'react-swipeable'
import { layout }                                 from 'styled-system'

import { contentWidth }                           from '@atlantis-lab/utils'

import { Dots }                                   from './Dots'
import { Slices }                                 from './Slices'
import { SlideshowProps }                         from './types'

type SlideshowComponentProps = {
  children: any
  width?: string
  height?: string
  transition?: string
  time?: number
  controlsType?: 'slices' | 'dots'
}

const Container = styled.div<any>(
  {
    display: 'flex',
    position: 'relative',
    touchAction: 'pan-y',
  },
  layout
)

const StyledSlide = styled.div<any>(({ opacity, transition, visibility }) => ({
  position: 'absolute',
  transition,
  opacity,
  visibility,
}))

export const Slideshow: FC<SlideshowProps> = ({
  children,
  width,
  height,
  transition,
  time = 10000,
  controlsType = 'slices',
}: SlideshowComponentProps) => {
  const [slide, setSlide] = useState(0)
  const [activeWidth, setActiveWidth] = useState(0)
  const [stop, setStop] = useState(false)
  const [containerWidth, setContainerWidth] = useState(null)
  const containerNode = useRef(null)

  const stopSlideshow = () => {
    setActiveWidth(100)
    setStop(true)
  }

  const swiped = data => {
    if (data.dir !== 'Up' && data.dir !== 'Down') {
      if (data.dir === 'Left') {
        if (slide < children.length - 1) {
          setSlide(slide + 1)
        } else {
          setSlide(0)
        }
      } else if (slide > 0) {
        setSlide(slide - 1)
      } else {
        setSlide(children.length - 1)
      }
      stopSlideshow()
    }
  }

  useEffect(() => {
    setContainerWidth(contentWidth(containerNode.current))
  }, [children.length])

  useEffect(() => {
    if (activeWidth > 110) {
      if (slide < children.length - 1) {
        setSlide(slide + 1)
        setActiveWidth(0)
      } else {
        setSlide(0)
        setActiveWidth(0)
      }
    }
  }, [children.length, activeWidth])

  useEffect(() => {
    let timeout = null
    if (!stop) {
      timeout = setTimeout(() => {
        setActiveWidth(activeWidth + 2)
      }, time / 50)
    }
    return () => clearTimeout(timeout)
  }, [activeWidth, stop])
  /* eslint-disable */
  return (
    <Container ref={containerNode} onMouseEnter={stopSlideshow} width={width} height={height}>
      <Swipeable onSwiped={(data) => swiped(data)} trackMouse trackTouch delta={30}>
        {children.map((item, index) => (
          <StyledSlide
            transition={transition}
            key={`slide-${index}`}
            opacity={slide === index ? 1 : 0}
            visibility={slide === index ? 'visible' : 'hidden'}
          >
            {item}
          </StyledSlide>
        ))}
      </Swipeable>
      {controlsType === 'dots' && (
        <Dots
          slides={children}
          currentSlide={slide}
          containerWidth={containerWidth}
          lastSlide={children.length - 1}
        />
      )}
      {controlsType === 'slices' && (
        <Slices
          slides={children}
          currentSlide={slide}
          activeWidth={activeWidth}
          containerWidth={containerWidth}
          lastSlide={children.length - 1}
        />
      )}
    </Container>
  )
  /* eslint-enable */
}
