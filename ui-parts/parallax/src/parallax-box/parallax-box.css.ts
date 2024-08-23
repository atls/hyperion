import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { flexboxProperties }      from '@atls-ui-parts/theme'
import { layoutProperties }       from '@atls-ui-parts/theme'
import { positionProperties }     from '@atls-ui-parts/theme'
import { spaceProperties }        from '@atls-ui-parts/theme'

export const parallaxSprinkles = createRainbowSprinkles(
  flexboxProperties,
  layoutProperties,
  positionProperties,
  spaceProperties
)

export type ParallaxSprinkles = Parameters<typeof parallaxSprinkles>[0]
