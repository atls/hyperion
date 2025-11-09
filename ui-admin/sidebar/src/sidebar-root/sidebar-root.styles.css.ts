import { style }  from '@vanilla-extract/css'

import { colors } from '@ui-admin/theme'

export const sidebarRootStyles = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  background: colors.blackblue,
  height: '100%',
  width: 64,
  borderRightColor: colors.gray,
  borderRightWidth: 1,
  borderRightStyle: 'solid',
})
