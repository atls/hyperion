import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-admin/theme/theme-css'

export const bottomNavigationRootStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  background: vars.colors.black,
  width: '100%',
  height: 64,
})
