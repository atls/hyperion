import { style }                  from '@vanilla-extract/css'
import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { vars }                   from '@atls-ui-parts/theme'

export const baseHandleStyles = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: '44px',
  height: '22px',
  padding: 0,
  verticalAlign: 'middle',
  borderRadius: '20px 20px',
  border: vars.borders.normalBlue,
  backgroundColor: vars.colors.white,
  cursor: 'pointer',
  outline: 'none',
})

const handleProperties = defineProperties({
  dynamicProperties: {
    border: true,
    backgroundColor: true,
  },
})

export const handleSprinkles = createRainbowSprinkles(handleProperties)

export type HandleSprinkles = Parameters<typeof handleSprinkles>[0]
