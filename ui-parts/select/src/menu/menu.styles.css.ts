import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

const menuComponentProperties = defineProperties({
  dynamicProperties: {
    width: true,
  },
})

export const baseMenuSprinkles = createRainbowSprinkles(menuComponentProperties)

export type BaseMenuSprinkles = Parameters<typeof baseMenuSprinkles>[0]

export const baseMenuStyles = style({
  display: 'flex',
  boxSizing: 'border-box',
  listStyleType: 'none',
  flexDirection: 'column',
  outline: 'none',
  padding: 0,
  width: '100%',
})
