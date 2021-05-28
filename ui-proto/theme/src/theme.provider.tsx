import React                                     from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import * as theme                                from './theme'
import { GlobalStyles }                          from './global.styles'

export const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
