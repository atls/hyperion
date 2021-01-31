import React       from 'react'
import renderer    from 'react-test-renderer'

import { Loading } from '../src/index'

it('Loading should render correctly (progress)', () => {
  const tree = renderer.create(<Loading />).toJSON()

  expect(tree).toMatchSnapshot()
})
