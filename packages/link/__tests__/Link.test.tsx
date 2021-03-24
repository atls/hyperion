import React             from 'react'
import renderer          from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'

import { Text }          from '@atlantis-lab/text'

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
          <Link href='/'>
            <Text color='green' fontSize='60px' fontWeight={700}>
              Nowhere
            </Text>
          </Link>
        </ThemeProvider>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
