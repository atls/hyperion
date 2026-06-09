import type { SelectShape }     from '../select.interfaces.js'
import type { SelectShapeName } from '../select.interfaces.js'

import { style }                from '@vanilla-extract/css'

import { vars }                 from '@atls-ui-parts/theme'

const itemCustomShapeStyles = style({
  padding: `${vars.space.g8} ${vars.space.g16}`,
})

const menuCustomShapeStyles = style({
  borderRadius: vars.radii.f8,
})

const triggerCustomShapeStyles = style({
  margin: `${vars.space.zero} ${vars.space.g10}`,
  borderRadius: vars.radii.f8,
})

export const shapeStyles = {
  default: {
    item: undefined,
    menu: undefined,
    trigger: undefined,
  },
  custom: {
    item: itemCustomShapeStyles,
    menu: menuCustomShapeStyles,
    trigger: triggerCustomShapeStyles,
  },
}

export const selectShapes: Record<SelectShapeName, SelectShape> = shapeStyles
