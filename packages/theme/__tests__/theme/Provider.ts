import { ThemeProvider as EmotionThemeProvider } from '../../src'
import { createElement }                         from 'react'

export const ThemeProvider = (props, theme) =>
    createElement(EmotionThemeProvider, {
        ...props,
        theme,
    })
