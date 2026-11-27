import { style }   from '@vanilla-extract/css'

import { spacing } from '@atls-ui/theme'
import { zIndex }  from '@atls-ui/theme'
export const listboxBaseStyles = style({
  boxSizing: 'border-box',
  position: 'relative',
  listStyle: 'none',
  margin: spacing.component.none,
  padding: spacing.component.none,
  overflowY: 'auto',
  maxWidth: '100dvw',
  zIndex: zIndex.overlay,
})
