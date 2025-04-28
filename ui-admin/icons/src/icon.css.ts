import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { vars }                   from '@atls-ui-admin/theme/theme-css'

export const iconProperties = defineProperties({
  dynamicProperties: {
    width: true,
    height: true,
  },
  staticProperties: {
    width: vars.space,
    height: vars.space,
  },
})

export const iconSprinkles = createRainbowSprinkles(iconProperties)

export type IconSprinkles = Parameters<typeof iconSprinkles>[0]
