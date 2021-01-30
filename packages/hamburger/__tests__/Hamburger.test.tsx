import React         from 'react'
import renderer      from 'react-test-renderer'

import { Hamburger } from '../src/index'

it('Hamburger should render active&inactive states correctly', () => {
  const treeInactive = renderer
    .create(<Hamburger color='alto' active={false} onClose={null} onOpen={null} />)
    .toJSON()

  const treeActive = renderer
    .create(<Hamburger color='white' active onClose={null} onOpen={null} />)
    .toJSON()

  expect(treeInactive).toMatchSnapshot()
  expect(treeActive).toMatchSnapshot()
})
