import React             from 'react'

import { Text }          from '@atlantis-lab/text'
import { ThemeProvider } from '@emotion/react'

import { NextLink }      from '..'

const defaultTheme = {
  colors: {
    white: '#FFF',
    lightBlue: '#00F',
  },
}

export const ExampleNextLink = () => (
  <ThemeProvider theme={defaultTheme}>
    <NextLink href='/' underline textDecorationStyle='dashed' textDecorationColor='lightBlue'>
      <Text color='red' fontSize='60px' fontWeight={700}>
        Nowhere
      </Text>
    </NextLink>
  </ThemeProvider>
)

export default {
  title: 'Link',
  component: ExampleNextLink,
}
