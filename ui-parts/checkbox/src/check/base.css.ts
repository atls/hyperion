import { style } from '@vanilla-extract/css'

export const checkBaseStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  visibility: 'hidden',
})

export const checkVisibleStyles = style({
  visibility: 'visible',
})
