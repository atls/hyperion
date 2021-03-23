import React             from 'react'
import renderer          from 'react-test-renderer'
import { MemoryRouter }  from 'react-router-dom'

import { ThemeProvider } from '@emotion/react'

import { RouteLink }     from '../src'

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
        <MemoryRouter>
          <ThemeProvider theme={defaultTheme}>
            <RouteLink href='/nowhere'>Click</RouteLink>
          </ThemeProvider>
          ,
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
