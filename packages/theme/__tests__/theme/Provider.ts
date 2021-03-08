import { createElement }                         from 'react'

import { ThemeProvider as EmotionThemeProvider } from '../../src'

export const ThemeProvider = (props, theme) =>
  createElement(EmotionThemeProvider, {
    ...props,
    theme,
  })
