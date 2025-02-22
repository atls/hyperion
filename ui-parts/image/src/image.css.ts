import type { SprinklesFn }       from 'rainbow-sprinkles'

import { style }                  from '@vanilla-extract/css'
import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

const imageProperties = defineProperties({
  dynamicProperties: {
    width: true,
    height: true,
  },
})

export const imageSprinkles: SprinklesFn<[typeof imageProperties]> =
  createRainbowSprinkles(imageProperties)

export type ImageSprinkles = Parameters<typeof imageSprinkles>[0]

export const baseImageStyles = style({
  display: 'block',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
})
