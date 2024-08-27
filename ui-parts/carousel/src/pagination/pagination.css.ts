import { style }                  from '@vanilla-extract/css'
import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

export const basePaginationStyles = style({
  boxSizing: 'border-box',
  outline: 'none',
  cursor: 'pointer',
})

const paginationProperties = defineProperties({
  dynamicProperties: {
    color: true,
    backgroundColor: true,
    borderColor: true,
    borderStyle: true,

    width: true,
    height: true,
    borderWidth: true,
    borderRadius: true,
    margin: true,
  },
  shorthands: {
    size: ['width', 'height'],
  },
})

export const paginationSprinkles = createRainbowSprinkles(paginationProperties)

export type PaginationSprinkles = Parameters<typeof paginationSprinkles>[0]
