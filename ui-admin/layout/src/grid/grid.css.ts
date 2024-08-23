import { createRainbowSprinkles }  from 'rainbow-sprinkles'

import { flexboxProperties }       from '@atls-ui-admin/theme'
import { gridProperties }          from '@atls-ui-admin/theme'
import { layoutProperties }        from '@atls-ui-admin/theme'
import { spaceProperties }         from '@atls-ui-admin/theme'
import { gridComponentProperties } from '@atls-ui-parts/layout'

export const gridSprinkles = createRainbowSprinkles(
  flexboxProperties,
  gridComponentProperties,
  gridProperties,
  layoutProperties,
  spaceProperties
)

export type GridSprinkles = Parameters<typeof gridSprinkles>[0]
