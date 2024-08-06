import './global.css'

import { createGlobalTheme } from '@vanilla-extract/css'

import { borders }           from './theme/index.js'
import { colors }            from './theme/index.js'
import { fonts }             from './theme/index.js'
import { fontSizes }         from './theme/index.js'
import { fontWeights }       from './theme/index.js'
import { lineHeights }       from './theme/index.js'
import { radii }             from './theme/index.js'
import { shadows }           from './theme/index.js'
import { space }             from './theme/index.js'

export const vars = createGlobalTheme(':root', {
  borders,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
})
