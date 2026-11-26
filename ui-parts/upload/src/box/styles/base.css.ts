import { style } from '@vanilla-extract/css'
export const boxBaseStyles = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 0,
  width: '100%',
  boxSizing: 'border-box',
  cursor: 'pointer',
  selectors: { '&[aria-disabled=true]': { cursor: 'default' } },
})
