import { style }   from '@vanilla-extract/css'

import { spacing } from '@atls-ui/theme'
export const inputValueBaseStyles = style({
  minWidth: spacing.component.none,
  flex: 1,
  overflowWrap: 'anywhere',
})
