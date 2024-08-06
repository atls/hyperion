import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { baseInputStyles }        from '../input/index.js'

export const baseDividedFieldsContainerStyles = baseInputStyles

export const baseDividedFieldsInputStyles = style({
  textAlign: 'center',
})

const dividedFieldsContainerProperties = defineProperties({
  dynamicProperties: {
    color: true,
    backgroundColor: true,
    borderColor: true,

    borderRadius: true,

    paddingRight: true,
    paddingLeft: true,

    height: true,
    borderWidth: true,
    fontSize: true,
    fontWeight: true,
    fontFamily: true,
  },
  shorthands: {
    fontColor: ['color'],
    size: ['height'],
  },
})

export const dividedFieldsContainerSprinkles = createRainbowSprinkles(
  dividedFieldsContainerProperties
)

export type DividedFieldsContainerSprinkles = Parameters<typeof dividedFieldsContainerSprinkles>[0]
