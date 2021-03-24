import React             from 'react'

import { Text }          from '@atlantis-lab/text'
import { ThemeProvider } from '@emotion/react'

import { Link }          from '..'

const defaultTheme = {
  colors: {
    white: '#FFF',
    lightBlue: '#00F',
  },
}

export const ExampleLink = () => (
  <ThemeProvider theme={defaultTheme}>
    <Link href='/' underline textDecorationStyle='dotted' textDecorationColor='lightBlue'>
      <Text color='green' fontSize='60px' fontWeight={700}>
        Nowhere
      </Text>
    </Link>
  </ThemeProvider>
)

export default {
  title: 'Link',
  component: ExampleLink,
}
