import { style }              from '@vanilla-extract/css'
import { fallbackVar }        from '@vanilla-extract/css'

import { borderWidths }       from '@atls-ui/theme'
import { borderStyles }       from '@atls-ui/theme'
import { radii }              from '@atls-ui/theme'

import { optionBorderWidth }  from './shape/variables.css.js'
import { optionBorderRadius } from './shape/variables.css.js'

export const optionBaseStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  overflowWrap: 'anywhere',
  cursor: 'pointer',
  borderStyle: borderStyles.solid,
  borderWidth: optionBorderWidth,
  borderTopWidth: borderWidths.none,
  borderBottomWidth: borderWidths.none,
  borderRadius: radii.none,
  outlineWidth: borderWidths.none,
  selectors: {
    '&:first-child': {
      borderWidth: optionBorderWidth,
      borderBottomWidth: borderWidths.none,
      borderRadius: fallbackVar(optionBorderRadius, 'inherit'),
      borderBottomLeftRadius: radii.none,
      borderBottomRightRadius: radii.none,
    },
    '&:last-child': {
      borderWidth: optionBorderWidth,
      borderTopWidth: borderWidths.none,
      borderRadius: fallbackVar(optionBorderRadius, 'inherit'),
      borderTopLeftRadius: radii.none,
      borderTopRightRadius: radii.none,
    },
    '&:only-child': {
      borderWidth: optionBorderWidth,
      borderRadius: fallbackVar(optionBorderRadius, 'inherit'),
    },
    '&:is(:focus-visible, [data-focused="true"]):not([aria-disabled="true"])': {
      borderWidth: optionBorderWidth,
    },
    '&[aria-disabled="true"]': { cursor: 'not-allowed' },
  },
})
