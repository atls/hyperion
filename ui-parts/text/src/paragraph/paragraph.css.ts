import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { colorProperties }        from '@atls-ui-parts/theme'
import { layoutProperties }       from '@atls-ui-parts/theme'
import { spaceProperties }        from '@atls-ui-parts/theme'
import { typographyProperties }   from '@atls-ui-parts/theme'

import { textProperties }         from '../text/index.js'

export const paragraphSprinkles = createRainbowSprinkles(
  textProperties,
  colorProperties,
  layoutProperties,
  spaceProperties,
  typographyProperties
)

export type ParagraphSprinkles = Parameters<typeof paragraphSprinkles>[0]
