import { fallbackVar }     from '@vanilla-extract/css'
import { globalStyle }     from '@vanilla-extract/css'
import { style }           from '@vanilla-extract/css'

import { inputAddonSizes } from '../shape/constants.js'
import { addonSize }       from '../shape/variants.css.js'

export const addonsStyles = style({
  alignItems: 'center',
  color: 'inherit',
  display: 'inline-flex',
})

export const addonStyles = style({
  alignItems: 'center',
  color: 'inherit',
  display: 'inline-flex',
  flex: '0 0 auto',
  height: fallbackVar(addonSize, inputAddonSizes.md),
  justifyContent: 'center',
  width: fallbackVar(addonSize, inputAddonSizes.md),
})

globalStyle(`${addonStyles} > svg`, {
  display: 'block',
  height: '100%',
  width: '100%',
})

export const leadingStyles = style({
  alignItems: 'center',
  display: 'flex',
})

export const trailingStyles = style({
  alignItems: 'center',
  display: 'flex',
  marginInlineStart: 'auto',
})
