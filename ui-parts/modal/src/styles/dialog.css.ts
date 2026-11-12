import { globalStyle } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

export const dialogStyles = style({
  position: 'fixed',
  inset: 0,
  margin: 0,
  border: 0,
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  maxWidth: 'none',
  maxHeight: 'none',
  overflow: 'auto',
  overscrollBehavior: 'contain',
  selectors: {
    '&[open]': { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', placeItems: 'center' },
    '&::backdrop': { background: 'transparent' },
  },
})
globalStyle(`html:has(${dialogStyles}[open])`, { overflow: 'hidden' })
