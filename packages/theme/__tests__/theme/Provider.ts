import { createElement }                         from 'react'

import { ThemeProvider as EmotionThemeProvider } from '../../src'
import * as theme from './theme'

export const ThemeProvider = (props) =>
  createElement(EmotionThemeProvider, {
    theme,
    ...props,
  })
