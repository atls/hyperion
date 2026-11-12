import { style } from '@vanilla-extract/css'

export const boxStyles = style({
  boxSizing: 'border-box',
  width: 'max-content',
  maxWidth: '100%',
  overflowWrap: 'anywhere',
  maxHeight: '100%',
  overflow: 'auto',
})
