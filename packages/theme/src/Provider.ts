import { createElement }                         from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

export const ThemeProvider = (props, theme) =>
  createElement(EmotionThemeProvider, {
    theme,
    ...props,
  })
