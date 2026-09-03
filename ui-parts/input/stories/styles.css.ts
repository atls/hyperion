import { style } from '@vanilla-extract/css'

export const containerStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  padding: '32px',
  width: '100%',
})

export const previewStyles = style({
  maxWidth: '720px',
  width: '100%',
})

export const inputStyles = style({
  width: '100%',
})
