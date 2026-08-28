import { fallbackVar } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

import { spacing }     from '@atls-ui/theme/tokens'

import { contentGap }  from '../shape/variants.css.js'

export const contentStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: fallbackVar(contentGap, spacing.component.lg),
  minWidth: 0,
})

export const fullWidthContentStyles = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
  columnGap: fallbackVar(contentGap, spacing.component.lg),
  width: '100%',
})

export const labelStyles = style({
  minWidth: 0,
  color: 'inherit',
})
