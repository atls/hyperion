import React             from 'react'
import renderer          from 'react-test-renderer'
import { MemoryRouter }  from 'react-router-dom'

import { Text }          from '@atlantis-lab/text'
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
            <RouteLink to='/nowhere'>
              <Text color='green' fontSize='60px' fontWeight={700}>
                Nowhere
              </Text>
            </RouteLink>
          </ThemeProvider>
          ,
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
