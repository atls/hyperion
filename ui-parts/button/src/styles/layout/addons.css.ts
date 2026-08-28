import { fallbackVar }        from '@vanilla-extract/css'
import { globalStyle }        from '@vanilla-extract/css'
import { style }              from '@vanilla-extract/css'

import { spacing }            from '@atls-ui/theme/tokens'

import { buttonAddonSizes }   from '../shape/constants.js'
import { addonSize }          from '../shape/variants.css.js'
import { contentGap }         from '../shape/variants.css.js'

export const addonsStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: fallbackVar(contentGap, spacing.component.lg),
  color: 'inherit',
})

export const addonStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: fallbackVar(addonSize, buttonAddonSizes.md),
  height: fallbackVar(addonSize, buttonAddonSizes.md),
  flex: '0 0 auto',
  color: 'inherit',
})

globalStyle(`${addonStyles} > svg`, {
  width: '100%',
  height: '100%',
})

export const leadingAddonStyles = style({
  justifySelf: 'start',
})

export const trailingAddonStyles = style({
  justifySelf: 'end',
})
