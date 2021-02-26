import React          from 'react'
import renderer       from 'react-test-renderer'

import { PriceInput } from '../src/index'

jest.mock('react-text-mask', () => props => <input type='text' {...{ ...props }} />)

it('PriceInput should render correctly', () => {
  const defaultTheme = {
    colors: {
      green: '#0f0',
      black: '#000',
      white: '#fff',
      blue: '#00f',
      red: '#f00',
      yellow: 'yellow',
      lightGray: 'lightGray',
      silver: '#C0C0C0',
      mountainmist: '#ecece3',
      alto: '#dbdbdb',
    },
    fontSizes: {
      tiny: '5em',
      normal: '7em',
      regular: '9em',
    },
    shadows: {
      controls: '0 0 10px rgba(0,0,0,0.5)',
    },
    borders: {
      controls: '2px solid black',
    },
    radii: {
      small: '5px',
    },
  }

  const tree = renderer
    .create(<PriceInput placeholder='Placeholder' theme={defaultTheme} onChange={Function} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
