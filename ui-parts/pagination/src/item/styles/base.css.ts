import { style }        from '@vanilla-extract/css'

import { spacing }      from '@atls-ui/theme/tokens'
import { borderWidths } from '@atls-ui/theme/tokens'
import { borderStyles } from '@atls-ui/theme/tokens'
import { opacity }      from '@atls-ui/theme/tokens'

import { itemWidth }    from './shape/variables.css.js'

export const itemStyles = style({
  alignItems: 'center',
  appearance: 'none',
  background: 'none',
  border: borderWidths.none,
  cursor: 'pointer',
  display: 'inline-flex',
  flex: '0 0 auto',
  justifyContent: 'center',
  outline: borderWidths.none,
  padding: spacing.component.none,
  position: 'relative',
  width: itemWidth,
  selectors: { '&:disabled': { cursor: 'not-allowed' } },
})

export const itemSurfaceStyles = style({
  boxSizing: 'border-box',
  display: 'block',
  pointerEvents: 'none',
  position: 'relative',
  width: '100%',
  selectors: { [`${itemStyles}:disabled &`]: { opacity: `${opacity.full} !important` } },
  '@media': { '(prefers-reduced-motion: reduce)': { opacity: `${opacity.full} !important` } },
})

export const itemFocusStyles = style({
  zIndex: 1,
  boxSizing: 'border-box',
  borderStyle: borderStyles.solid,
  pointerEvents: 'none',
  position: 'absolute',
  width: '100%',
  visibility: 'hidden',
  selectors: { [`${itemStyles}:focus-visible:not(:disabled) &`]: { visibility: 'visible' } },
})
