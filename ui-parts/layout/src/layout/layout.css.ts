import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { flexboxProperties }      from '@atls-ui-parts/theme'
import { layoutProperties }       from '@atls-ui-parts/theme'
import { spaceProperties }        from '@atls-ui-parts/theme'

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
