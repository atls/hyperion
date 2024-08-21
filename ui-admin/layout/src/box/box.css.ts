import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { borderProperties }       from '@atls-ui-admin/theme/properties'
import { colorProperties }        from '@atls-ui-admin/theme/properties'
import { flexboxProperties }      from '@atls-ui-admin/theme/properties'
import { layoutProperties }       from '@atls-ui-admin/theme/properties'
import { positionProperties }     from '@atls-ui-admin/theme/properties'
import { shadowProperties }       from '@atls-ui-admin/theme/properties'
import { spaceProperties }        from '@atls-ui-admin/theme/properties'
import { boxProperties }          from '@atls-ui-parts/layout'

export const boxSprinkles = createRainbowSprinkles(
  boxProperties,
  borderProperties,
  colorProperties,
  flexboxProperties,
  layoutProperties,
  positionProperties,
  shadowProperties,
  spaceProperties
)

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0]
