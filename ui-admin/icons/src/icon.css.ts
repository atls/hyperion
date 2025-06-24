import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { vars }                   from '@atls-ui-admin/theme/theme-css'

export const iconProperties = defineProperties({
  dynamicProperties: {
    width: true,
    height: true,
    color: true,
    stroke: true,
  },
  staticProperties: {
    width: vars.space,
    height: vars.space,
    color: vars.colors,
    stroke: vars.colors,
  },
})

export const iconSprinkles = createRainbowSprinkles(iconProperties)
