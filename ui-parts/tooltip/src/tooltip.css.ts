import { style } from '@vanilla-extract/css'

export const testContainerStyles = style({
  width: 50,
  height: 30,
  background: 'green',
  margin: 0,
})

export const testButtonStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 32,
  padding: '0px 16px',
  color: 'rgba(0, 0, 0, 0.65)',
  backgroundColor: '#fff',
  border: '1px solid #d9d9d9',
  cursor: 'pointer',
})
