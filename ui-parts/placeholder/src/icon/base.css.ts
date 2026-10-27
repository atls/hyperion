import { globalStyle } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

export const iconBaseStyles = style({
  alignItems: 'center',
  display: 'inline-flex',
  gridArea: 'icon',
  justifyContent: 'center',
  lineHeight: 1,
})

globalStyle(`${iconBaseStyles} > svg`, {
  height: '100%',
  width: '100%',
})
