import { style }               from '@vanilla-extract/css'

import { borderStyles }        from '@atls-ui/theme/tokens'
import { borderWidths }        from '@atls-ui/theme/tokens'
import { radii }               from '@atls-ui/theme/tokens'

import { appearanceVariables } from '../src/styles/appearance/styles.css.js'

export const containerStyles = style({
  boxSizing: 'border-box',
  display: 'grid',
  gap: '16px',
  width: '100%',
  maxWidth: '480px',
  padding: '32px',
})

export const rowStyles = style({
  display: 'grid',
  gridTemplateColumns: '32px minmax(0, 1fr)',
  alignItems: 'center',
  gap: '16px',
})

export const shapeLabelStyles = style({
  color: 'inherit',
})

export const focusedStyles = style({
  background: appearanceVariables.focused.background,
  borderColor: appearanceVariables.focused.border,
  color: appearanceVariables.focused.thumb,
})

export const customThumbStyles = style({
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  borderWidth: borderWidths.xs,
  borderStyle: borderStyles.solid,
  borderColor: 'currentColor',
  borderRadius: radii.full,
})
