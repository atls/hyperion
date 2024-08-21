import { createRainbowSprinkles }    from 'rainbow-sprinkles'

import { flexboxProperties }         from '@atls-ui-admin/theme/properties'
import { layoutProperties }          from '@atls-ui-admin/theme/properties'
import { spaceProperties }           from '@atls-ui-admin/theme/properties'
import { layoutComponentProperties } from '@atls-ui-parts/layout'

export const layoutSprinkles = createRainbowSprinkles(
  flexboxProperties,
  layoutComponentProperties,
  layoutProperties,
  spaceProperties
)

export type LayoutSprinkles = Parameters<typeof layoutSprinkles>[0]
