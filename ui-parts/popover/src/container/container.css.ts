import { style } from '@vanilla-extract/css'

export const containerStyles = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 180,
  minHeight: 32,
  padding: 0,
  margin: 0,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '4px',
  boxShadow: '0px 2px 24px rgba(0, 0, 0, 0.15)',
  zIndex: 1000,
})

export const containerContentStyles = style({
  display: 'flex',
  padding: '12px 16px',
  width: '100%',
})

export const containerTitleStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 8px',
  borderBottom: '1px solid rgba(228, 228, 228, 1)',
  minHeight: 32,
  width: '100%',
})
