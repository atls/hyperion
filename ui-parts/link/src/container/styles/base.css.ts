import { style } from '@vanilla-extract/css'
export const containerStyles = style({
  cursor: 'pointer',
  textDecoration: 'none',
  overflowWrap: 'anywhere',
  selectors: { '&[aria-disabled="true"]': { cursor: 'default' } },
})
