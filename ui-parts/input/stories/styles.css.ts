import { style } from '@vanilla-extract/css'

export const containerStyles = style({
  boxSizing: 'border-box',
  display: 'grid',
  gap: '32px',
  minWidth: '320px',
  padding: '32px',
  width: '100%',
})

export const appearanceStyles = style({
  display: 'grid',
  gap: '16px',
})

export const titleStyles = style({
  fontFamily: 'inherit',
  fontSize: '24px',
  lineHeight: 1.2,
  margin: 0,
})

export const rowStyles = style({
  alignItems: 'start',
  display: 'grid',
  gap: '16px',
  gridTemplateColumns: '72px minmax(0, 1fr)',
})

export const labelStyles = style({
  paddingTop: '10px',
})

export const stateGridStyles = style({
  alignItems: 'start',
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
})

export const exampleStyles = style({
  display: 'grid',
  gap: '8px',
})

export const typedTableViewportStyles = style({
  maxWidth: '100%',
  overflowX: 'auto',
})

export const typedTableStyles = style({
  display: 'grid',
  gap: '16px',
  gridTemplateColumns: 'repeat(5, minmax(220px, 1fr))',
  minWidth: '1164px',
})

export const typedColumnStyles = style({
  display: 'grid',
  gridTemplateRows: '32px minmax(78px, auto)',
})

export const typedHeadingStyles = style({
  alignItems: 'center',
  display: 'flex',
  fontWeight: 500,
  paddingInline: '8px',
})

export const typedCellStyles = style({
  alignItems: 'flex-start',
  display: 'flex',
  minHeight: '64px',
  padding: '8px',
})

export const typedInputStyles = style({
  width: '100%',
})
