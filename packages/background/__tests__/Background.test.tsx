import React          from 'react'
import renderer       from 'react-test-renderer'

import { Background } from '../src/index'

it('Background should render correctly', () => {
  const tree = renderer.create(<Background backgroundColor='#00f' />).toJSON()

  expect(tree).toMatchSnapshot()
})
