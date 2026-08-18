import type { BordersTokens }    from './tokens/index.js'
import type { Colors }           from './tokens/index.js'
import type { TypographyTokens } from './tokens/index.js'

import { borders }               from './tokens/index.js'
import { darkColors }            from './tokens/index.js'
import { lightColors }           from './tokens/index.js'
import { typography }            from './tokens/index.js'

export interface Theme {
  borders: BordersTokens
  colors: Colors
  typography: TypographyTokens
}

export const lightTheme: Theme = {
  borders: borders(lightColors),
  colors: lightColors,
  typography,
}

export const darkTheme: Theme = {
  borders: borders(darkColors),
  colors: darkColors,
  typography,
}
