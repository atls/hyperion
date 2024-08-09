import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { flexboxProperties }      from '@atls-ui-parts/theme/properties'
import { layoutProperties }       from '@atls-ui-parts/theme/properties'
import { positionProperties }     from '@atls-ui-parts/theme/properties'
import { spaceProperties }        from '@atls-ui-parts/theme/properties'

export const parallaxSprinkles = createRainbowSprinkles(
  flexboxProperties,
  layoutProperties,
  positionProperties,
  spaceProperties
)

export type ParallaxSprinkles = Parameters<typeof parallaxSprinkles>[0]
