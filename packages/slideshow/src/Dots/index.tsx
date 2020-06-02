import React, { FC, Fragment } from 'react'

import { ControlsProps }       from '../types'
import { Container }           from './Container'
import { Dot }                 from './Dot'

export const Dots: FC<ControlsProps> = ({ slides, currentSlide, lastSlide, containerWidth }) => (
  <Container containerWidth={containerWidth}>
    {slides.map((item, index) => (
      <Fragment key={`${item}`}>
        <Dot active={index === currentSlide} lastSlide={index === lastSlide} />
      </Fragment>
    ))}
  </Container>
)
