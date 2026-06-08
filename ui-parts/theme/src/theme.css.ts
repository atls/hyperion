import './global.css'

import { createGlobalTheme } from '@vanilla-extract/css'

import { borders }           from './tokens/index.js'
import { colors }            from './tokens/index.js'
import { fonts }             from './tokens/index.js'
import { fontSizes }         from './tokens/index.js'
import { fontWeights }       from './tokens/index.js'
import { lineHeights }       from './tokens/index.js'
import { radii }             from './tokens/index.js'
import { shadows }           from './tokens/index.js'
import { space }             from './tokens/index.js'

export const globalThemeId = 'atls-ui-parts-theme'

export const vars = createGlobalTheme(`#${globalThemeId}`, {
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
