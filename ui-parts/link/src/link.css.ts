import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

const linkComponentProperties = defineProperties({
  dynamicProperties: {
    color: true,
    textDecoration: true,
  },
})

export const linkSprinkles = createRainbowSprinkles(linkComponentProperties)

export type LinkSprinkles = Parameters<typeof linkSprinkles>[0]

export const baseLinkStyles = style({
  cursor: 'pointer',
  textDecoration: 'none',
})
