import type { SelectShape }     from '../interfaces.js'
import type { SelectShapeName } from '../interfaces.js'

import { style }                from '@vanilla-extract/css'

import { vars }                 from '@atls-ui-parts/theme'

import { DEFAULT_MENU_WIDTH }   from '../constants.js'

const menuDefaultShapeStyles = style({
  width: DEFAULT_MENU_WIDTH,
  borderRadius: vars.radii.f4,
})

export const shapeStyles = {
  default: {
    item: undefined,
    menu: menuDefaultShapeStyles,
    trigger: undefined,
  },
}

export const selectShapes: Record<SelectShapeName, SelectShape> = shapeStyles
