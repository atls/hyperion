import React            from 'react'
import renderer         from 'react-test-renderer'

import { IconsManager } from '../src/index'

it('IconsManager should render correctly', () => {
  const defaultTheme = {
    colors: {
      green: '#0f0',
      black: '#000',
      white: '#fff',
      blue: '#00f',
      red: '#f00',
      lightGray: 'gray',
    },
    shadows: {
      controls: '0 0 10px rgba(0,0,0,0.5)',
    },
    borders: {
      controls: '2px solid black',
    },
  }

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
