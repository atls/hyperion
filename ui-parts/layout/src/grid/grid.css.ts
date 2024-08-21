import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { flexboxProperties }      from '@atls-ui-parts/theme/properties'
import { gridProperties }         from '@atls-ui-parts/theme/properties'
import { layoutProperties }       from '@atls-ui-parts/theme/properties'
import { spaceProperties }        from '@atls-ui-parts/theme/properties'

export const gridComponentProperties = defineProperties({
  dynamicProperties: {
    boxSizing: true,
    gap: true,
  },
})

export const gridSprinkles = createRainbowSprinkles(
  flexboxProperties,
  gridComponentProperties,
  gridProperties,
  layoutProperties,
  spaceProperties
)

export type GridSprinkles = Parameters<typeof gridSprinkles>[0]
