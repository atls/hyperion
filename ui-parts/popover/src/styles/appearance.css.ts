import type { PopoverAppearance }     from './interfaces.js'
import type { PopoverAppearanceName } from './interfaces.js'

import { style }                      from '@vanilla-extract/css'

import { vars }                       from '@atls-ui-parts/theme'

const rootDefaultAppearanceStyles = style({
  backgroundColor: vars.colors.white,
  boxShadow: vars.shadows.gordonsgreen,
})

const titleDefaultAppearanceStyles = style({
  borderBottom: vars.borders.normalCloudyWhite,
})

export const appearanceVariant = {
  default: {
    root: rootDefaultAppearanceStyles,
    title: titleDefaultAppearanceStyles,
    content: '',
  },
}

export const popoverAppearances: Record<PopoverAppearanceName, PopoverAppearance> = {
  default: appearanceVariant.default,
}
