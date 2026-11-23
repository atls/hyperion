import { style }   from '@vanilla-extract/css'

import { spacing } from '@atls-ui/theme/tokens'
export const fallbackStyles = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  textAlign: 'center',
})
export const fallbackIconStyles = style({
  display: 'block',
  flexShrink: 0,
  width: '100%',
  height: 'auto',
})
export const descriptionStyles = style({
  flexShrink: 0,
  width: '100%',
  margin: spacing.component.none,
  overflowWrap: 'anywhere',
  maxWidth: '100%',
})
