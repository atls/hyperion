import { fallbackVar }         from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { borderStyles }        from '@atls-ui/theme/tokens'
import { borderWidths }        from '@atls-ui/theme/tokens'
import { spacing }             from '@atls-ui/theme/tokens'
import { typography }          from '@atls-ui/theme/tokens'

import { appearanceVariables } from '../appearance/styles.css.js'
import { contentGap }          from '../shape/variants.css.js'

export const containerStyles = style({
  display: 'inline-grid',
  gap: spacing.component.xs,
  maxWidth: '100%',
})

export const fieldStyles = style({
  alignItems: 'center',
  borderStyle: borderStyles.solid,
  borderWidth: borderWidths.sm,
  boxSizing: 'border-box',
  cursor: 'text',
  display: 'flex',
  gap: fallbackVar(contentGap, spacing.component.lg),
  maxWidth: '100%',
  transition: 'background 120ms ease, border-color 120ms ease, box-shadow 120ms ease',
  selectors: {
    '&[data-disabled="true"]': {
      cursor: 'not-allowed',
    },
  },
})

export const inputStyles = style({
  appearance: 'none',
  background: 'transparent',
  border: 0,
  boxSizing: 'border-box',
  color: 'inherit',
  flex: '1 1 auto',
  font: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: 'inherit',
  margin: 0,
  minWidth: 0,
  outline: 0,
  padding: 0,
  width: '100%',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&::placeholder': {
      color: appearanceVariables.unfilled.content,
      opacity: 1,
    },
  },
})

export const messageStyles = style({
  ...typography.overline,
  margin: 0,
  overflowWrap: 'anywhere',
})
