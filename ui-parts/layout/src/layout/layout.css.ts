import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { flexboxProperties }      from '@atls-ui-parts/theme/properties'
import { layoutProperties }       from '@atls-ui-parts/theme/properties'
import { spaceProperties }        from '@atls-ui-parts/theme/properties'

export const layoutComponentProperties = defineProperties({
  dynamicProperties: {
    boxSizing: true,
    gap: true,
  },
})

export const layoutSprinkles = createRainbowSprinkles(
  flexboxProperties,
  layoutComponentProperties,
  layoutProperties,
  spaceProperties
)

export type LayoutSprinkles = Parameters<typeof layoutSprinkles>[0]
