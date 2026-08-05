import type { Colors } from './tokens/index.js'

import { darkColors }  from './tokens/index.js'
import { lightColors } from './tokens/index.js'

export interface Theme {
  colors: Colors
}

export const lightTheme: Theme = {
  colors: lightColors,
}

export const darkTheme: Theme = {
  colors: darkColors,
}
