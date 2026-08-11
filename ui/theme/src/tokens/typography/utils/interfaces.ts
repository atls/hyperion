import type { fontSizes }      from '../fontSizes.js'
import type { fontWeights }    from '../fontWeights.js'
import type { letterSpacings } from '../letterSpacings.js'
import type { lineHeights }    from '../lineHeights.js'

export type FontSizeValue = (typeof fontSizes)[keyof typeof fontSizes]

export type LineHeightValue = (typeof lineHeights)[keyof typeof lineHeights]

export type FontWeightValue = (typeof fontWeights)[keyof typeof fontWeights]

export type LetterSpacingValue = (typeof letterSpacings)[keyof typeof letterSpacings]
