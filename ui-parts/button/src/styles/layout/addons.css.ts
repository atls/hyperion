import { globalStyle }        from '@vanilla-extract/css'

import { style } from '@vanilla-extract/css'

import { shapeVariables }     from '../shape/styles.css.js'

export const addonsStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: shapeVariables.gap,
  color: 'inherit',
})

export const addonStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: shapeVariables.addonSize,
  height: shapeVariables.addonSize,
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
