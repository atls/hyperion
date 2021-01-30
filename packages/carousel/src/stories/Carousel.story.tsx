import React        from 'react'
import { useTheme } from '@emotion/react'

import { Carousel } from '../index'

export const ExampleCarousel = ({
  controlWidth = 50,
  controlHeight = 50,
  controlLeft = 0,
  controlRight = 0,
  controlTop = 100,
  isOverflowHidden = false,
  isSquareControls = false,
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
      theme={theme}
    >
      <h1>{'bigtext'.repeat(100)}</h1>
    </Carousel>
  )
}

export default {
  title: 'Carousel',
  component: Carousel,
}
