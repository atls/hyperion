import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { borderProperties }       from '@atls-ui-parts/theme/properties'
import { colorProperties }        from '@atls-ui-parts/theme/properties'
import { flexboxProperties }      from '@atls-ui-parts/theme/properties'
import { layoutProperties }       from '@atls-ui-parts/theme/properties'
import { positionProperties }     from '@atls-ui-parts/theme/properties'
import { shadowProperties }       from '@atls-ui-parts/theme/properties'
import { spaceProperties }        from '@atls-ui-parts/theme/properties'

const boxProperties = defineProperties({
  dynamicProperties: {
    boxSizing: true,
    cursor: true,
    gap: true,
  },
})

export const boxSprinkles = createRainbowSprinkles(
  boxProperties,
  borderProperties,
  colorProperties,
  flexboxProperties,
  layoutProperties,
  positionProperties,
  shadowProperties,
  spaceProperties
)

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0]
