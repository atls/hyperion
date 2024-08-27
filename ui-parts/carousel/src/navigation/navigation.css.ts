import { style }                  from '@vanilla-extract/css'
import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

export const baseNavigationStyles = style({
  boxSizing: 'border-box',
  outline: 'none',
  cursor: 'pointer',
  position: 'absolute',
  zIndex: 2,
})

export const showNavigationStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const hideNavigationStyles = style({
  display: 'none',
})

const navigationProperties = defineProperties({
  dynamicProperties: {
    color: true,
    backgroundColor: true,
    borderColor: true,

    width: true,
    height: true,
    borderWidth: true,
    borderRadius: true,
    marginTop: true,
    top: true,
    right: true,
    left: true,
  },
})

export const navigationSprinkles = createRainbowSprinkles(navigationProperties)

export type NavigationSprinkles = Parameters<typeof navigationSprinkles>[0]
