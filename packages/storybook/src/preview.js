import React from 'react'
import { ThemeProvider } from '@emotion/react'

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

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  Story => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
]
