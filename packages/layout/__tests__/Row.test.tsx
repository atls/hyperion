import React    from 'react'
import renderer from 'react-test-renderer'

import { Row }  from '../src/index'

it('Row should render correctly', () => {
  const tree = renderer.create(<Row>Something</Row>)

  expect(tree).toMatchSnapshot()
})
