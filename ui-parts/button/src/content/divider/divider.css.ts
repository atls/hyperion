import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

export const dividerStyles = style({
  display: 'flex',
})

const dividerProperties = defineProperties({
  dynamicProperties: {
    marginLeft: true,
  },
  shorthands: {
    divider: ['marginLeft'],
  },
})

export const dividerSprinkles = createRainbowSprinkles(dividerProperties)

export type DividerSprinkles = Parameters<typeof dividerSprinkles>[0]
