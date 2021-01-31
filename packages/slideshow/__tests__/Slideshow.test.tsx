import React         from 'react'
import renderer      from 'react-test-renderer'

import { Slideshow } from '../src/index'

it('Slideshow should render correctly', () => {
  const tree = renderer
    .create(
      <Slideshow transition='.5s'>
        <h1>Slide 1</h1>
        <h1>Slide 2</h1>
        <h1>Slide 3</h1>
      </Slideshow>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
