import React    from 'react'
import renderer from 'react-test-renderer'

import { Text } from '../src'

it('should render Text component correctly', () => {
  const tree = renderer
    .create(
      <Text color='red' fontFamily='Courier' fontSize='2vh'>
        This is test
      </Text>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
