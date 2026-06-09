import type { SelectAppearance }     from '../interfaces.js'
import type { SelectAppearanceName } from '../interfaces.js'

import { style }                     from '@vanilla-extract/css'

import { vars }                      from '@atls-ui-parts/theme'

const itemDefaultAppearanceStyles = style({
  color: vars.colors.black,
})

const menuDefaultAppearanceStyles = style({
  border: vars.borders.normalBlack,
})

export const appearanceVariant = {
  default: {
    highlightedItem: '',
    item: itemDefaultAppearanceStyles,
    menu: menuDefaultAppearanceStyles,
    trigger: '',
  },
}

export const selectAppearances: Record<SelectAppearanceName, SelectAppearance> = {
  default: appearanceVariant.default,
}
