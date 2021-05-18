import { createContext }  from 'react'

import { ThemeModeStore } from './theme-mode.store'

export const ThemeModeContext = createContext(new ThemeModeStore('dark'))

export const ThemeModeProvider = ThemeModeContext.Provider

export const ThemeModeConsumer = ThemeModeContext.Consumer
