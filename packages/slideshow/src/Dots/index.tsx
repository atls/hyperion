import React, { FC, Fragment } from 'react'

import { unique }              from '@atlantis-lab/utils'

import { ControlsProps }       from '../types'
import { Container }           from './Container'
import { Dot }                 from './Dot'

export const Dots: FC<ControlsProps> = ({ slides, currentSlide, lastSlide, containerWidth }) => {
  return (
    <Container containerWidth={containerWidth}>
      {slides.map((item, index) => (
        <Fragment key={`${unique()}`}>
          <Dot active={index === currentSlide} lastSlide={index === lastSlide} />
        </Fragment>
      ))}
    </Container>
  )
}
