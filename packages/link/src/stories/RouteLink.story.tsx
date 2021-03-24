import React             from 'react'
import { MemoryRouter }  from 'react-router-dom'

import { Text }          from '@atlantis-lab/text'
import { ThemeProvider } from '@emotion/react'

import { RouteLink }     from '..'

const defaultTheme = {
  colors: {
    white: '#FFF',
    lightBlue: '#00F',
  },
}

export const ExampleRouteLink = () => (
  <ThemeProvider theme={defaultTheme}>
    <MemoryRouter>
      <RouteLink to='/' underline textDecorationStyle='wavy' textDecorationColor='lightBlue'>
        <Text color='red' fontSize='60px' fontWeight={700}>
          Nowhere
        </Text>
      </RouteLink>
    </MemoryRouter>
  </ThemeProvider>
)

export default {
  title: 'Link',
  component: ExampleRouteLink,
}
