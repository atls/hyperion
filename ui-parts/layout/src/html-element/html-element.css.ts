import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { boxProperties }          from '@atls-ui-parts/layout'
import { flexboxProperties }      from '@atls-ui-parts/theme'
import { positionProperties }     from '@atls-ui-parts/theme'
import { layoutProperties }       from '@atls-ui-parts/theme'
import { spaceProperties }        from '@atls-ui-parts/theme'

export const htmlElementSprinkles = createRainbowSprinkles(
  boxProperties,
  flexboxProperties,
  positionProperties,
  layoutProperties,
  spaceProperties
)

export type HTMLElementSprinkles = Parameters<typeof htmlElementSprinkles>[0]
