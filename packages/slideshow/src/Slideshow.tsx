import styled                                 from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'

import { contentWidth }                       from '@atlantis-lab/utils'

import { Slices }                             from './Slices'

const Container = styled.div({
  width: '100%',
  display: 'flex',
  position: 'relative',
})

export const Slideshow = ({ children, time }) => {
  const [slide, setSlide] = useState(0)
  const [containerWidth, setContainerWidth] = useState(null)
  const containerNode = useRef(null)

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
      {children[slide]}
      <Slices
        slides={children}
        currentSlide={slide}
        containerWidth={containerWidth}
        lastSlide={children.length - 1}
      />
    </Container>
  )
}
