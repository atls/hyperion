import React             from 'react'
import renderer          from 'react-test-renderer'

import { Text }          from '@atlantis-lab/text'
import { ThemeProvider } from '@emotion/react'

import { NextLink }      from '../src'

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
          <NextLink
            href='/nowhere'
            underline
            textDecorationStyle='dotted'
            textDecorationColor='lightBlue'
          >
            <Text color='green' fontSize='60px' fontWeight={700}>
              Nowhere
            </Text>
          </NextLink>
        </ThemeProvider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
