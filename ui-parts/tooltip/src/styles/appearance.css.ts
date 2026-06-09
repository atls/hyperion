import type { TooltipAppearance }     from '../interfaces.js'
import type { TooltipAppearanceName } from '../interfaces.js'

import { style }                      from '@vanilla-extract/css'

import { vars }                       from '@atls-ui-parts/theme'

const containerDefaultAppearanceStyles = style({
  color: vars.colors.white,
  backgroundColor: vars.colors.blackThreeQuarters,
  boxShadow: vars.shadows.gordonsgreen,
})

export const appearanceVariant = {
  default: {
    container: containerDefaultAppearanceStyles,
  },
}

export const tooltipAppearances: Record<TooltipAppearanceName, TooltipAppearance> = {
  default: appearanceVariant.default,
}
