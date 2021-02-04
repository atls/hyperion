import renderer                                     from 'react-test-renderer'
import React, { useEffect }                         from 'react'

import { useActive, useFocus, useHover, withState } from '../src/index'

it('withState should provide all hocs to the component', () => {
  const TargetButton = ({ active, focus, hover, onMouseEnter }) => {
    useEffect(() => {
      onMouseEnter()
    })

    return <button type='submit'>{`${active}, ${focus} and ${hover}`}</button>
  }

  const EnhancedButton = withState([useActive, useFocus, useHover])(TargetButton)

  const tree = renderer.create(<EnhancedButton />)

  expect(tree.toJSON()).toMatchSnapshot()
})
