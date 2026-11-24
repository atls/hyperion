import { style }   from '@vanilla-extract/css'

import { spacing } from '@atls-ui/theme'
export const containerStyles = style({
  display: 'inline-flex',
  minWidth: spacing.component.none,
  maxWidth: '100%',
})
