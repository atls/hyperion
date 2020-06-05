import React, { FC, useEffect, useRef, useState } from 'react'
import { Swipeable }                              from 'react-swipeable'

import styled                                     from '@emotion/styled'
import { contentWidth }                           from '@atlantis-lab/utils'

import { Dots }                                   from './Dots'
import { Slices }                                 from './Slices'
import { SlideshowProps }                         from './types'

const Container = styled.div({
  width: '100%',
  display: 'flex',
  position: 'relative',
})

export const Slideshow: FC<SlideshowProps> = ({
  children,
  time = 10000,
  controlsType = 'slices',
}) => {
  const [slide, setSlide] = useState(0)
  const [containerWidth, setContainerWidth] = useState(null)
  const containerNode = useRef(null)

  const swiped = data => {
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
  }

  useEffect(() => {
    setContainerWidth(contentWidth(containerNode.current))
  }, [children.length])

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide < children.length - 1) {
        setSlide(slide + 1)
      } else {
        setSlide(0)
      }
    }, time)
    return () => clearInterval(interval)
  }, [children.length, slide])

  return (
    <Container ref={containerNode}>
      <Swipeable
        onSwiped={data => swiped(data)}
        preventDefaultTouchmoveEvent
        trackMouse
        trackTouch
        delta={15}
      >
        {children[slide]}
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
          containerWidth={containerWidth}
          lastSlide={children.length - 1}
        />
      )}
    </Container>
  )
}
