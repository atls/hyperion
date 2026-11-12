import { globalStyle }  from '@vanilla-extract/css'
import { style }        from '@vanilla-extract/css'

import { borderWidths } from '@atls-ui/theme/tokens'
import { spacing }      from '@atls-ui/theme/tokens'

export const dialogStyles = style({
  position: 'fixed',
  inset: spacing.component.none,
  margin: spacing.component.none,
  border: borderWidths.none,
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  maxWidth: 'none',
  maxHeight: 'none',
  color: 'inherit',
  overflow: 'auto',
  overscrollBehavior: 'contain',
  selectors: {
    '&[open]': { display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', placeItems: 'center' },
    '&::backdrop': { background: 'none' },
  },
})
globalStyle(`html:has(${dialogStyles}[open])`, { overflow: 'hidden' })
