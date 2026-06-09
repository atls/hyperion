import type { SelectAppearance }     from '../select.interfaces.js'
import type { SelectAppearanceName } from '../select.interfaces.js'

import { style }                     from '@vanilla-extract/css'

import { vars }                      from '@atls-ui-parts/theme'

const highlightedItemCustomAppearanceStyles = style({
  backgroundColor: vars.colors.blue,
  color: vars.colors.white,
})

const itemCustomAppearanceStyles = style({
  color: vars.colors.black,
})

const menuCustomAppearanceStyles = style({
  border: '1px solid',
  borderColor: vars.colors.blue,
  backgroundColor: vars.colors.white,
})

const triggerCustomAppearanceStyles = style({
  border: '1px solid',
  borderColor: vars.colors.blue,
  backgroundColor: vars.colors.white,
  color: vars.colors.black,
})

export const appearanceVariant = {
  default: {
    highlightedItem: undefined,
    item: undefined,
    menu: undefined,
    trigger: undefined,
  },
  custom: {
    highlightedItem: highlightedItemCustomAppearanceStyles,
    item: itemCustomAppearanceStyles,
    menu: menuCustomAppearanceStyles,
    trigger: triggerCustomAppearanceStyles,
  },
}

export const selectAppearances: Record<SelectAppearanceName, SelectAppearance> = {
  custom: appearanceVariant.custom,
  default: appearanceVariant.default,
}
