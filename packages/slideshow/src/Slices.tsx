import styled              from '@emotion/styled'
import React, { Fragment } from 'react'
import { ifProp }          from 'styled-tools'

const StyledSlice = styled.div<any>(
  {
    display: 'flex',
    height: '2px',
    backgroundColor: 'white',
    opacity: '0.5',
    marginRight: '6px',
  },
  ifProp('active', {
    opacity: '1',
  }),
  ifProp('lastSlide', {
    marginRight: '0px',
  })
)

const SlicesContainer = styled.div<any>(({ containerWidth }) => ({
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  bottom: '30px',
  zIndex: 3,
  width: `${containerWidth * 0.9}px`,
  left: `calc(50% - ${(containerWidth * 0.9) / 2}px)`,
}))

export const Slices = ({ slides, currentSlide, lastSlide, containerWidth }) => (
  <SlicesContainer containerWidth={containerWidth}>
    {slides.map((item, index) => (
      <Fragment key={`${item.name}`}>
        <StyledSlice
          style={{ flexBasis: `${containerWidth / slides.length - 6}px` }}
          active={index === currentSlide}
          lastSlide={index === lastSlide}
        />
      </Fragment>
    ))}
  </SlicesContainer>
)
