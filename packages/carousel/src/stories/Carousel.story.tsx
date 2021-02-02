import React                        from 'react'
import { useTheme }                 from '@emotion/react'

import { Box, Column, Layout, Row } from '@atlantis-lab/layout'

import { Carousel }                 from '../index'

const Card = ({ name, text }) => {
  return (
    <Box
      border='input'
      borderRadius='extra'
      width={['324px', '324px', '268px']}
      minHeight={['300px', 'auto', 'auto']}
      justifyContent='center'
    >
      <Column maxWidth={['280px', '280px', '228px']}>
        <Layout flexBasis='20px' />
        {text}
        <Layout flexGrow={[1, 1, 0]} flexBasis='20px' />
        <Row>
          <Layout flexBasis='10px' />
          <Column width='auto' overflow='hidden'>
            {name}
          </Column>
        </Row>
        <Layout flexBasis='20px' />
      </Column>
    </Box>
  )
}

const helperArray = number => {
  const array = []
  for (let i = 0; i < number; i += 1) array.push(i)
  return array
}

export const ExampleCarousel = ({
  controlWidth = 50,
  controlHeight = 50,
  controlLeft = 0,
  controlRight = 0,
  controlTop = 100,
  isOverflowHidden = true,
  isSquareControls = false,
  transition,
}) => {
  const theme = useTheme()

  return (
    <Carousel
      controlWidth={controlWidth}
      controlHeight={controlHeight}
      controlLeft={controlLeft}
      controlRight={controlRight}
      controlTop={controlTop}
      isOverflowHidden={isOverflowHidden}
      isSquareControls={isSquareControls}
      transition={transition}
      theme={theme}
    >
      {helperArray(10).map(i => (
        <Card text={'placeholder text '.repeat(15)} name={`Slide no${i}`} />
      ))}
    </Carousel>
  )
}

export default {
  title: 'Carousel',
  component: Carousel,
}
