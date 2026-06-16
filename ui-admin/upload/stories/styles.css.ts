import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-admin/theme'

export const toggleThemeStyles = style({
  width: 'fit-content',
  margin: `${vars.space.zero} ${vars.space.zero} ${vars.space.g10} auto`,
})

export const uploadAreaStyles = style({
  width: '100%',
  height: 200,
})
