import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { layoutProperties }       from '@atls-ui-parts/theme'

export const spaceSprinkles = createRainbowSprinkles(layoutProperties)

export type SpaceSprinkles = Parameters<typeof spaceSprinkles>[0]
