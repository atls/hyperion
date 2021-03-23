import React             from 'react'
import renderer          from 'react-test-renderer'

import { ThemeProvider } from '@emotion/react'

import { Link }          from '../src'

describe('test suit for link', () => {
  it('should render Link correctly', () => {
    const defaultTheme = {
      colors: {
        white: '#FFF',
        lightBlue: '#00F',
      },
    }

    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Link href='/nowhere'>Click</Link>
        </ThemeProvider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
