import './global.css'

import { createTheme }         from '@vanilla-extract/css'
import { createThemeContract } from '@vanilla-extract/css'

import { darkThemeTokens }     from './theme/index.js'
import { themeContract }       from './theme/index.js'
import { lightThemeTokens }    from './theme/index.js'

export const vars = createThemeContract(themeContract)

export const lightTheme = createTheme(vars, lightThemeTokens)

export const darkTheme = createTheme(vars, darkThemeTokens)
