import { createElement }                         from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@atlantis-lab/theme'

import * as theme                                from './theme'

export const ThemeProvider = (props) =>
  createElement(EmotionThemeProvider, {
    theme,
    ...props,
  })
