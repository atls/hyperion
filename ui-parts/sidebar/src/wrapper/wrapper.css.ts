import { style } from '@vanilla-extract/css'

export const baseWrapperStyles = style({
  display: 'flex',
  height: '100%',
  width: 80,
  position: 'relative',
})

export const pinnedWrapperStyles = style({
  width: 'initial',
})
