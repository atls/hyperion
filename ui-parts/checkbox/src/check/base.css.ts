import { style } from '@vanilla-extract/css'

export const checkBaseStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  visibility: 'hidden',
  width: '100%',
  height: '100%',
  lineHeight: 1,
})

export const checkVisibleStyles = style({
  visibility: 'visible',
})
