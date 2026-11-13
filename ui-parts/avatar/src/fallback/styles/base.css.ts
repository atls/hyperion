import { style } from '@vanilla-extract/css'
export const fallbackBaseStyles = style({
  gridArea: '1 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  userSelect: 'none',
})
