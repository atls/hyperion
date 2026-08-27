import { style }               from '@vanilla-extract/css'

import { appearanceVariables } from '../src/styles/appearance/styles.css.js'
import { shapeVariables }      from '../src/styles/shape/styles.css.js'

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
  filter: shapeVariables.elevations.focused,
  outlineColor: appearanceVariables.focused.border,
})
