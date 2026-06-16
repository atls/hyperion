import type { PopoverShape }     from './interfaces.js'
import type { PopoverShapeName } from './interfaces.js'

import { style }                 from '@vanilla-extract/css'

import { vars }                  from '@atls-ui-parts/theme'

import { ROOT_MIN_HEIGHT }       from './constants.js'
import { ROOT_MIN_WIDTH }        from './constants.js'
import { ROOT_Z_INDEX }          from './constants.js'

const rootDefaultShapeStyles = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: ROOT_MIN_WIDTH,
  minHeight: ROOT_MIN_HEIGHT,
  margin: 0,
  padding: `${vars.space.g12} ${vars.space.g16}`,
  borderRadius: vars.radii.f4,
  zIndex: ROOT_Z_INDEX,
})

export const shapeStyles = {
  default: {
    root: rootDefaultShapeStyles,
  },
}

export const popoverShapes: Record<PopoverShapeName, PopoverShape> = shapeStyles
