import React      from 'react'
import renderer   from 'react-test-renderer'

import { Button } from '../src/index'

it('Button should render correctly', () => {
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

  const tree = renderer
    .create(
      <Button
        theme={defaultTheme}
        backgroundColor='white'
        hoverBackgroundColor='red'
        activeBackgroundColor='green'
      >
        Button
      </Button>,
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
