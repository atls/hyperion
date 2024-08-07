import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { colorProperties }        from '@atls-ui-parts/theme/properties'
import { layoutProperties }       from '@atls-ui-parts/theme/properties'
import { spaceProperties }        from '@atls-ui-parts/theme/properties'
import { typographyProperties }   from '@atls-ui-parts/theme/properties'

const textProperties = defineProperties({
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
