import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { createElement }                         from 'react'

export const ThemeProvider = (props, theme) =>
  createElement(EmotionThemeProvider, {
    ...props,
    theme,
  })
