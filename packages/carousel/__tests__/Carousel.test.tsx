import React        from 'react'
import renderer     from 'react-test-renderer'

import { Carousel } from '../src/index'

it('Carousel should render correctly', () => {
  const defaultTheme = {
    colors: {
      green: '#0f0',
      black: '#000',
      white: '#fff',
      blue: '#00f',
      red: '#f00',
      lightGray: 'gray',
    },
    shadows: {
      controls: '0 0 10px rgba(0,0,0,0.5)',
    },
    borders: {
      controls: '2px solid black',
    },
  }

  const tree = renderer
    .create(
      <Carousel
        controlWidth={50}
        controlHeight={50}
        controlRight={0}
        controlLeft={0}
        controlTop={100}
        isOverflowHidden={false}
        isSquareControls={false}
        theme={defaultTheme}
      >
        <h1>{'bigtext'.repeat(100)}</h1>
      </Carousel>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
