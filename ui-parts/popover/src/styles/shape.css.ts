import type { PopoverShape }     from './interfaces.js'
import type { PopoverShapeName } from './interfaces.js'

import { style }                 from '@vanilla-extract/css'

import { vars }                  from '@atls-ui-parts/theme'

import { ROOT_MIN_HEIGHT }       from './constants.js'
import { ROOT_MIN_WIDTH }        from './constants.js'
import { ROOT_Z_INDEX }          from './constants.js'
import { TITLE_MIN_HEIGHT }      from './constants.js'

const rootDefaultShapeStyles = style({
  minWidth: ROOT_MIN_WIDTH,
  minHeight: ROOT_MIN_HEIGHT,
  borderRadius: vars.radii.f4,
  zIndex: ROOT_Z_INDEX,
})

const titleDefaultShapeStyles = style({
  padding: `${vars.space.g4} ${vars.space.g8}`,
  minHeight: TITLE_MIN_HEIGHT,
})

const contentDefaultShapeStyles = style({
  padding: `${vars.space.g12} ${vars.space.g16}`,
})

export const shapeStyles = {
  default: {
    root: rootDefaultShapeStyles,
    title: titleDefaultShapeStyles,
    content: contentDefaultShapeStyles,
  },
}

export const popoverShapes: Record<PopoverShapeName, PopoverShape> = shapeStyles
