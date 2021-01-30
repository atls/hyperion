import React      from 'react'
import renderer   from 'react-test-renderer'

import { Layout } from '../src/index'

it('Layout should render correctly', () => {
  const tree = renderer.create(<Layout background-color='#000' size='200' />).toJSON()

  expect(tree).toMatchSnapshot()
})
