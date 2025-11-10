import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-admin/theme/theme-css'

export const sidebarRootStyles = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  background: vars.colors.blue,
  height: '100%',
  width: 64,
  borderRightColor: vars.colors.gray,
  borderRightWidth: 1,
  borderRightStyle: 'solid',
})
