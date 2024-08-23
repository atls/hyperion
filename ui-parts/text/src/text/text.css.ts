import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { colorProperties }        from '@atls-ui-parts/theme'
import { layoutProperties }       from '@atls-ui-parts/theme'
import { spaceProperties }        from '@atls-ui-parts/theme'
import { typographyProperties }   from '@atls-ui-parts/theme'

export const textProperties = defineProperties({
  dynamicProperties: {
    cursor: true,
    textOverflow: true,
    wordBreak: true,
    whiteSpace: true,
    textTransform: true,
  },
})

export const textSprinkles = createRainbowSprinkles(
  textProperties,
  colorProperties,
  layoutProperties,
  spaceProperties,
  typographyProperties
)

export type TextSprinkles = Parameters<typeof textSprinkles>[0]
