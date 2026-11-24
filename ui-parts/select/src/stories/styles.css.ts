import { style }   from '@vanilla-extract/css'

import { spacing } from '@atls-ui/theme'
export const previewStyles = style({
  padding: spacing.layout.xs2,
  minHeight: spacing.layout.xl,
  display: 'flex',
  alignItems: 'flex-start',
})
