import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { colorProperties }        from '@atls-ui-admin/theme/properties'
import { layoutProperties }       from '@atls-ui-admin/theme/properties'
import { spaceProperties }        from '@atls-ui-admin/theme/properties'
import { typographyProperties }   from '@atls-ui-admin/theme/properties'
import { textProperties }         from '@atls-ui-parts/text'

export const textSprinkles = createRainbowSprinkles(
  textProperties,
  colorProperties,
  layoutProperties,
  spaceProperties,
  typographyProperties
)

export type TextSprinkles = Parameters<typeof textSprinkles>[0]
