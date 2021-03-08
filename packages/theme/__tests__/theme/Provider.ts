import { createElement }                         from 'react'

import * as theme                                from './theme'
import { ThemeProvider as EmotionThemeProvider } from '../../src'

export const ThemeProvider = (props) =>
  createElement(EmotionThemeProvider, {
    theme,
    ...props,
  })
