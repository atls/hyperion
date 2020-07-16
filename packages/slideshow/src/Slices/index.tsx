import React, { FC }     from 'react'

import { Box }           from '@atlantis-lab/layout'

import { ControlsProps } from '../types'
import { Container }     from './Container'
import { Slice }         from './Slice'

/* eslint-disable */
export const Slices: FC<ControlsProps> = ({
  slides,
  activeWidth,
  currentSlide,
  lastSlide,
  containerWidth,
}) => (
  <Container containerWidth={containerWidth}>
    {slides.map((item, index) => (
      <Box
        key={`slice-${index}`}
        position='relative'
        flexBasis={`${containerWidth / slides.length - 6}px`}
        height='2px'
        backgroundColor='rgba(255, 255, 255, 0.5)'
        overflow='hidden'
        marginRight={lastSlide === index ? '0px' : '6px'}
      >
        <Slice activeWidth={index === currentSlide ? activeWidth : '0px'} />
      </Box>
    ))}
  </Container>
)
/* eslint-enable */
