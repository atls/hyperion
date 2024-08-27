import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { FC }                                 from 'react'
import { PropsWithChildren }                  from 'react'
import React                                  from 'react'

import { darkTheme }                          from './theme.css.js'
import { lightTheme }                         from './theme.css.js'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
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
