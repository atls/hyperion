import styled              from '@emotion/styled'
import React, { Fragment } from 'react'
import { ifProp }          from 'styled-tools'

const DotsItem = styled.div<any>(
  ({ theme }) => ({
    display: 'flex',
    height: '8px',
    width: '8px',
    borderRadius: '8px',
    backgroundColor: theme.colors.lightGray,
    marginRight: '6px',
  }),
  ifProp('active', ({ theme }) => ({
    backgroundColor: theme.colors.green,
  })),
  ifProp('lastSlide', {
    marginRight: '0px',
  })
)

const DotsContainer = styled.div<any>(({ containerWidth }) => ({
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  bottom: '-24px',
  zIndex: 3,
  width: `${containerWidth * 0.9}px`,
  left: `calc(50% - ${(containerWidth * 0.9) / 2}px)`,
}))

export const Dots = ({ slides, currentSlide, lastSlide, containerWidth }) => (
  <DotsContainer containerWidth={containerWidth}>
    {slides.map((item, index) => (
      <Fragment key={`${item.name}`}>
        <DotsItem active={index === currentSlide} lastSlide={index === lastSlide} />
      </Fragment>
    ))}
  </DotsContainer>
)
