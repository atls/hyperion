import React        from 'react'

import { Carousel } from '../index'

export const ExampleCarousel = ({
  controlWidth = 50,
  controlHeight = 50,
  controlLeft = 0,
  controlRight = 0,
  controlTop = 100,
  isOverflowHidden = false,
  isSquareControls = false,
}) => (
  <Carousel
    controlWidth={controlWidth}
    controlHeight={controlHeight}
    controlLeft={controlLeft}
    controlRight={controlRight}
    controlTop={controlTop}
    isOverflowHidden={isOverflowHidden}
    isSquareControls={isSquareControls}
  >
    <h1>
      {(() => {
        let str = ''
        for (let i = 0; i < 100; i += 1) str += 'bigtext'
        return str
      })()}
    </h1>
  </Carousel>
)

export default {
  title: 'Carousel',
  component: Carousel,
}
