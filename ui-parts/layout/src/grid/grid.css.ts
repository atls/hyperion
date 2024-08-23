import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { flexboxProperties }      from '@atls-ui-parts/theme'
import { gridProperties }         from '@atls-ui-parts/theme'
import { layoutProperties }       from '@atls-ui-parts/theme'
import { spaceProperties }        from '@atls-ui-parts/theme'

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
