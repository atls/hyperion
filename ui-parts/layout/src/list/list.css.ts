import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { borderProperties }       from '@atls-ui-parts/theme'
import { colorProperties }        from '@atls-ui-parts/theme'
import { flexboxProperties }      from '@atls-ui-parts/theme'
import { layoutProperties }       from '@atls-ui-parts/theme'
import { positionProperties }     from '@atls-ui-parts/theme'
import { shadowProperties }       from '@atls-ui-parts/theme'
import { spaceProperties }        from '@atls-ui-parts/theme'

export const listProperties = defineProperties({
  dynamicProperties: {
    boxSizing: true,
    cursor: true,
    gap: true,
  },
})

export const listSprinkles = createRainbowSprinkles(
  listProperties,
  borderProperties,
  colorProperties,
  flexboxProperties,
  layoutProperties,
  positionProperties,
  shadowProperties,
  spaceProperties
)

export type ListSprinkles = Parameters<typeof listSprinkles>[0]
