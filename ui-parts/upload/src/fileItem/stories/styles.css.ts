import { style }   from '@vanilla-extract/css'

import { spacing } from '@atls-ui/theme/tokens'
export const stageStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.layout.xs2,
})
