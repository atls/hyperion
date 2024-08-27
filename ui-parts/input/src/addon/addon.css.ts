import { style }                  from '@vanilla-extract/css'
import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { baseInputStyles }        from '../input/index.js'

export const baseAddonStyles = baseInputStyles

export const addonPositionBeforeStyles = style({
  width: 'auto',
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
  borderRightWidth: 0,
})

export const addonPositionAfterStyles = style({
  width: 'auto',
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: 0,
  borderLeftWidth: 0,
})

export const addonsContainerBaseStyles = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  ':focus': {
    zIndex: 1,
  },
  ':hover': {
    zIndex: 2,
  },
})

const addonProperties = defineProperties({
  dynamicProperties: {
    color: true,
    backgroundColor: true,
    borderColor: true,

    borderBottomRightRadius: true,
    borderTopRightRadius: true,
    borderBottomLeftRadius: true,
    borderTopLeftRadius: true,
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

export const addonSprinkles = createRainbowSprinkles(addonProperties)

export type AddonSprinkles = Parameters<typeof addonSprinkles>[0]
