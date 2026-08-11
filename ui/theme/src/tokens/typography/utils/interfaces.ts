import type { fontSizes }      from '../font-sizes.js'
import type { fontWeights }    from '../font-weights.js'
import type { letterSpacings } from '../letter-spacings.js'
import type { lineHeights }    from '../line-heights.js'

export type FontSizeValue = (typeof fontSizes)[keyof typeof fontSizes]

export type LineHeightValue = (typeof lineHeights)[keyof typeof lineHeights]

export type FontWeightValue = (typeof fontWeights)[keyof typeof fontWeights]

export type LetterSpacingValue = (typeof letterSpacings)[keyof typeof letterSpacings]
