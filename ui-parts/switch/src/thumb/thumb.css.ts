import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { vars }                   from '@atls-ui-parts/theme'

export const baseThumbStyles = style({
  position: 'absolute',
  cursor: 'pointer',
  borderRadius: '50%',
  backgroundColor: vars.colors.blue,
  boxSizing: 'border-box',
  width: '18px',
  height: '18px',
})

export const disabledThumbStyles = style({
  backgroundColor: vars.colors.white,
  border: vars.borders.normalBlue,
})

const thumbProperties = defineProperties({
  dynamicProperties: {
    backgroundColor: true,
    border: true,
    width: true,
    height: true,
  },
})

export const thumbSprinkles = createRainbowSprinkles(thumbProperties)

export type ThumbSprinkles = Parameters<typeof thumbSprinkles>[0]
