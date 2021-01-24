import React             from 'react'
import { ThemeProvider } from '@emotion/react'

import { Carousel }      from '../index'

const defaultTheme = {
  colors: {
    white: '#fff',
  },
  shadows: {
    controls: '0 0 10px rgba(0,0,0,0.5)',
  },
  borders: {
    controls: '2px solid black',
  },
}

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
  decorators: [
    Story => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}
