import { style }   from '@vanilla-extract/css'

import { spacing } from '@atls-ui/theme'
export const containerStyles = style({
  display: 'inline-flex',
  maxWidth: '100%',
  minWidth: spacing.component.none,
  selectors: { '&[hidden]': { display: 'none' } },
})
