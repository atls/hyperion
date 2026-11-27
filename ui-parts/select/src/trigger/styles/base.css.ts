import { style }              from '@vanilla-extract/css'

import { borderStyles }       from '@atls-ui/theme'
import { spacing }            from '@atls-ui/theme'

import { triggerBorderWidth } from './shape/variables.css.js'
export const triggerBaseStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'start',
  maxWidth: '100%',
  minWidth: spacing.component.none,
  margin: spacing.component.none,
  borderStyle: borderStyles.solid,
  borderWidth: triggerBorderWidth,
  cursor: 'pointer',
  selectors: { '&:disabled': { cursor: 'not-allowed' } },
})
