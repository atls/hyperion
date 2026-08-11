import type { Colors }           from './tokens/index.js'
import type { TypographyTokens } from './tokens/index.js'

import { darkColors }            from './tokens/index.js'
import { lightColors }           from './tokens/index.js'
import { typography }            from './tokens/index.js'

export interface Theme {
  colors: Colors
  typography: TypographyTokens
}

export const lightTheme: Theme = {
  colors: lightColors,
  typography,
}

export const darkTheme: Theme = {
  colors: darkColors,
  typography,
}
