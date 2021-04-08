import React     from 'react'
import ReactDOM  from 'react-dom'
import renderer  from 'react-test-renderer'

import { Layer } from '../src'

describe('Layer', () => {
  it('should render layer correctly', () => {
    ReactDOM.createPortal = (node) => node

    const tree = renderer
      .create(
        <div id='appRoot'>
          <Layer setActive={() => {}} appRoot='appRoot' border='1px solid black'>
            Portal
          </Layer>
        </div>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
