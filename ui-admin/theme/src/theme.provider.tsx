import type { ReactNode }                     from 'react'
import type { PropsWithChildren }             from 'react'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React                                  from 'react'

import { darkTheme }                          from './theme.css.js'
import { lightTheme }                         from './theme.css.js'

export const ThemeProvider = ({ children }: PropsWithChildren): ReactNode => (
  <NextThemeProvider
    attribute='class'
    defaultTheme='light'
    value={{
      light: lightTheme,
      dark: darkTheme,
    }}
  >
    {children}
  </NextThemeProvider>
)
