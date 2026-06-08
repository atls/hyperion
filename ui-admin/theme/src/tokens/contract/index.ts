import { bordersContract }     from './borders.js'
import { colorsContract }      from './colors.js'
import { fontSizesContract }   from './font-sizes.js'
import { fontWeightsContract } from './font-weights.js'
import { fontsContract }       from './fonts.js'
import { lineHeightsContract } from './line-heights.js'
import { radiiContract }       from './radii.js'
import { shadowsContract }     from './shadows.js'
import { spaceContract }       from './space.js'

export const themeContract = {
  borders: bordersContract,
  colors: colorsContract,
  fonts: fontsContract,
  fontSizes: fontSizesContract,
  fontWeights: fontWeightsContract,
  lineHeights: lineHeightsContract,
  radii: radiiContract,
  shadows: shadowsContract,
  space: spaceContract,
}

export type { BordersTokens } from './borders.js'
export type { ColorsTokens } from './colors.js'
export type { FontSizesTokens } from './font-sizes.js'
export type { FontWeightsTokens } from './font-weights.js'
export type { FontsTokens } from './fonts.js'
export type { LineHeightsTokens } from './line-heights.js'
export type { RadiiTokens } from './radii.js'
export type { ShadowsTokens } from './shadows.js'
export type { SpaceTokens } from './space.js'
