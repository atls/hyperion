import styled                                     from '@emotion/styled'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Swipeable }                              from 'react-swipeable'

import { contentWidth }                           from '@atlantis-lab/utils'

import { Dots }                                   from './Dots'
import { Slices }                                 from './Slices'
import { SlideshowProps }                         from './types'

const Container = styled.div<any>(({ width, height }) => ({
  display: 'flex',
  position: 'relative',
  width,
  height,
}))

const StyledSlide = styled.div<any>(({ opacity }) => ({
  position: 'absolute',
  transition: '0.35s',
  opacity,
}))

export const Slideshow: FC<SlideshowProps> = ({
  children,
  width,
  height,
  time = 10000,
  controlsType = 'slices',
}) => {
  const [slide, setSlide] = useState(0)
  const [activeWidth, setActiveWidth] = useState(0)
  const [stop, setStop] = useState(false)
  const [containerWidth, setContainerWidth] = useState(null)
  const containerNode = useRef(null)

  const swiped = data => {
    if (data.dir === 'Left') {
      if (slide < children.length - 1) {
        setSlide(slide + 1)
        setActiveWidth(0)
      } else {
        setSlide(0)
        setActiveWidth(0)
      }
    } else if (slide > 0) {
      setSlide(slide - 1)
      setActiveWidth(0)
    } else {
      setSlide(children.length - 1)
      setActiveWidth(0)
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
    <Container ref={containerNode} onMouseEnter={() => setStop(true)} width={width} height={height}>
      <Swipeable
        onSwiped={data => swiped(data)}
        preventDefaultTouchmoveEvent
        trackMouse
        trackTouch
        delta={15}
      >
        {children.map((item, index) => (
          <StyledSlide key={`slide-${index}`} opacity={slide === index ? 1 : 0}>
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
