import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { createElement }                         from 'react'

export const ThemeProvider = (props, theme) =>
  createElement(EmotionThemeProvider, {
    ...props,
    theme,
  })
