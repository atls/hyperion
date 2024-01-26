import * as dark                                 from './dark'
import * as light                                from './light'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                     from 'react'

import { ThemeModeProvider }                     from './mode'
import { ThemeModeStore }                        from './mode'
import { useThemeMode }                          from './mode'

export const BaseThemeProvider = (props) => {
  const [mode] = useThemeMode()
  return <EmotionThemeProvider {...props} theme={() => (mode === 'dark' ? dark : light)} />
}

export const ThemeProvider = ({ mode, ...props }) => (
  <ThemeModeProvider value={new ThemeModeStore(mode)}>
    <BaseThemeProvider {...props} />
  </ThemeModeProvider>
)
