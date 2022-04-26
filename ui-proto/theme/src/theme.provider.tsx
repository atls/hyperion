import * as theme                                from './theme'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                     from 'react'

import { GlobalStyles }                          from './global.styles'

export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
