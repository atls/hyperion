import type { PopoverShape } from '../interfaces.js'

import { style }             from '@vanilla-extract/css'

import { vars }              from '@atls-ui-parts/theme'

const rootDefaultShapeStyles = style({
  minWidth: 180,
  minHeight: 32,
  padding: vars.space.zero,
  borderRadius: vars.radii.f4,
  zIndex: 1000,
})

const titleDefaultShapeStyles = style({
  minHeight: 32,
  padding: `${vars.space.g4} ${vars.space.g8}`,
})

const contentDefaultShapeStyles = style({
  padding: `${vars.space.g12} ${vars.space.g16}`,
})

export const popoverShapes: Record<'default', PopoverShape> = {
  default: {
    root: rootDefaultShapeStyles,
    title: titleDefaultShapeStyles,
    content: contentDefaultShapeStyles,
  },
}
