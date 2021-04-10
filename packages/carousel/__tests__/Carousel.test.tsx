import React        from 'react'
import renderer     from 'react-test-renderer'

import { Carousel } from '../src/index'

it('Carousel should render correctly', () => {
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
      >
        <h1>{'bigtext'.repeat(100)}</h1>
      </Carousel>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
