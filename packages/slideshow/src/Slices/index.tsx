import React, { FC, Fragment } from 'react'

import { ControlsProps }       from '../types'
import { Container }           from './Container'
import { Slice }               from './Slice'

export const Slices: FC<ControlsProps> = ({ slides, currentSlide, lastSlide, containerWidth }) => (
  <Container containerWidth={containerWidth}>
    {slides.map((item, index) => (
      <Fragment key={`${item}`}>
        <Slice
          style={{ flexBasis: `${containerWidth / slides.length - 6}px` }}
          active={index === currentSlide}
          lastSlide={index === lastSlide}
        />
      </Fragment>
    ))}
  </Container>
)
