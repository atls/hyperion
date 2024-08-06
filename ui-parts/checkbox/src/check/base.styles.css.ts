import { style } from '@vanilla-extract/css'

export const checkBaseStyles = style({
  width: 'calc(100% - 3px)',
  height: 'calc(100% - 3px)',
  display: 'none',
  backgroundColor: 'blue',
  borderRadius: 4,
})

export const checkCheckedStyles = style({
  display: 'block',
})
