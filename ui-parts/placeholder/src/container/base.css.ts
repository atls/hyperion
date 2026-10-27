import { style }                          from '@vanilla-extract/css'

import { placeholderAppearanceVariables } from '../styles/appearance/styles.css.js'

export const containerBaseStyles = style({
  alignItems: 'center',
  backgroundColor: placeholderAppearanceVariables.backgroundColor,
  boxSizing: 'border-box',
  display: 'grid',
  width: 'fit-content',
})
