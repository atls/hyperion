import React    from 'react'
import renderer from 'react-test-renderer'

import { Box }  from '../src/index'

it('Layout should render correctly', () => {
  const tree = renderer.create(<Box>Something</Box>).toJSON()

  expect(tree).toMatchSnapshot()
})
