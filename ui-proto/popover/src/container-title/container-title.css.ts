import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const containerTitleStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.space.g4} ${vars.space.g17}`,
  borderBottom: vars.borders.normalCloudyWhite,
  minHeight: 32,
  width: '100%',
  boxSizing: 'border-box',
})
