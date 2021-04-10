import React            from 'react'
import renderer         from 'react-test-renderer'

import { IconsManager } from '../src/index'

it('IconsManager should render correctly', () => {
  const Icon = ({ color = 'red' }) => <h1 style={{ color: `${color}` }}>I can change color</h1>

  const tree = renderer
    .create(
      <IconsManager color='red' hoverColor='yellow' clickedColor='black'>
        <Icon />
      </IconsManager>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
