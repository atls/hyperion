import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { borderProperties }       from '@atls-ui-admin/theme'
import { colorProperties }        from '@atls-ui-admin/theme'
import { flexboxProperties }      from '@atls-ui-admin/theme'
import { layoutProperties }       from '@atls-ui-admin/theme'
import { positionProperties }     from '@atls-ui-admin/theme'
import { shadowProperties }       from '@atls-ui-admin/theme'
import { spaceProperties }        from '@atls-ui-admin/theme'
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
