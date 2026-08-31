import type { Theme }             from '@atls-ui/theme'
import type { PropsWithChildren } from 'react'
import type { ReactNode }         from 'react'

import { createContext }          from 'react'
import { useContext }             from 'react'

import { lightTheme }             from '@atls-ui/theme'

export interface ThemeProviderProps {
  theme?: Theme
}

const ThemeContext = createContext<Theme>(lightTheme)

export const ThemeProvider = ({
  children,
  theme = lightTheme,
}: PropsWithChildren<ThemeProviderProps>): ReactNode => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)

export const useTheme = (): Theme => useContext(ThemeContext)
