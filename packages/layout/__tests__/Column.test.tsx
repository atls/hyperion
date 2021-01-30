import React      from 'react'
import renderer   from 'react-test-renderer'

import { Column } from '../src/index'

it('Column should render correctly', () => {
  const tree = renderer.create(<Column />)

  expect(tree).toMatchSnapshot()
})
