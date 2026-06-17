import type { TooltipShape }           from '../interfaces.js'
import type { TooltipShapeName }       from '../interfaces.js'

import { style }                       from '@vanilla-extract/css'

import { vars }                        from '@atls-ui-parts/theme'

import { DEFAULT_CONTAINER_HEIGHT }    from '../constants.js'
import { DEFAULT_CONTAINER_MIN_WIDTH } from '../constants.js'
import { DEFAULT_CONTAINER_Z_INDEX }   from '../constants.js'

const containerDefaultShapeStyles = style({
  minWidth: DEFAULT_CONTAINER_MIN_WIDTH,
  minHeight: DEFAULT_CONTAINER_HEIGHT,
  padding: `${vars.space.g8} ${vars.space.g12}`,
  borderRadius: vars.radii.f8,
  zIndex: DEFAULT_CONTAINER_Z_INDEX,
})

export const shapeStyles = {
  default: {
    container: containerDefaultShapeStyles,
  },
}

export const tooltipShapes: Record<TooltipShapeName, TooltipShape> = shapeStyles
