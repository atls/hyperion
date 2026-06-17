import type { PopoverAppearance } from '../interfaces.js'

import { style }                  from '@vanilla-extract/css'

import { vars }                   from '@atls-ui-parts/theme'

const rootDefaultAppearanceStyles = style({
  backgroundColor: vars.colors.white,
  boxShadow: vars.shadows.gordonsgreen,
})

const titleDefaultAppearanceStyles = style({
  borderBottom: vars.borders.thinLightGray,
})

export const popoverAppearances: Record<'default', PopoverAppearance> = {
  default: {
    root: rootDefaultAppearanceStyles,
    title: titleDefaultAppearanceStyles,
  },
}
