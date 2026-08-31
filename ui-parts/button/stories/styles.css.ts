import { style }               from '@vanilla-extract/css'

import { appearanceVariables } from '../src/styles/appearance/styles.css.js'
import { elevationVariables }  from '../src/styles/shape/variants.css.js'

export const containerStyles = style({
  boxSizing: 'border-box',
  display: 'grid',
  gap: '32px',
  width: '100%',
  maxWidth: '720px',
  padding: '32px',
})

export const appearanceStyles = style({
  display: 'grid',
  gap: '12px',
})

export const titleStyles = style({
  margin: 0,
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: '24px',
  lineHeight: 1.2,
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

export const buttonContainerStyles = style({
  display: 'flex',
  justifyContent: 'flex-end',
})

export const focusedStyles = style({
  background: appearanceVariables.focused.background,
  color: appearanceVariables.focused.content,
  boxShadow: elevationVariables.focused,
  outlineColor: appearanceVariables.focused.border,
})
