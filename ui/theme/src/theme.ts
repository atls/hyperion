import type { BordersTokens }    from './tokens/index.js'
import type { Colors }           from './tokens/index.js'
import type { ElevationsTokens } from './tokens/index.js'
import type { TypographyTokens } from './tokens/index.js'

import { borders }               from './tokens/index.js'
import { darkColors }            from './tokens/index.js'
import { elevations }            from './tokens/index.js'
import { lightColors }           from './tokens/index.js'
import { typography }            from './tokens/index.js'

export interface Theme {
  borders: BordersTokens
  colors: Colors
  elevations: ElevationsTokens
  typography: TypographyTokens
}

export const lightTheme: Theme = {
  borders: borders(lightColors),
  colors: lightColors,
  elevations: elevations(lightColors),
  typography,
}

export const darkTheme: Theme = {
  borders: borders(darkColors),
  colors: darkColors,
  elevations: elevations(darkColors),
  typography,
}
