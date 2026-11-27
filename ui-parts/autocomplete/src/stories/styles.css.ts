import { style }   from '@vanilla-extract/css'

import { spacing } from '@atls-ui/theme'
export const previewStyles = style({
  display: 'flex',
  alignItems: 'flex-start',
  padding: spacing.layout.xs2,
  minHeight: spacing.layout.xl,
})
