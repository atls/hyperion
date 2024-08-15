import { style } from '@vanilla-extract/css'

export const baseHandleStyles = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: 44,
  height: 22,
  padding: 0,
  verticalAlign: 'middle',
  borderRadius: '20px 20px',
  border: '1px solid #454B60',
  backgroundColor: '#fff',
  cursor: 'pointer',
  outline: 'none',
})

export const baseThumbStyles = style({
  position: 'absolute',
  cursor: 'pointer',
  borderRadius: '50% 50%',
  backgroundColor: '#454B60',
  boxSizing: 'border-box',
  width: 18,
  height: 18,
})

export const disabledThumbStyles = style({
  backgroundColor: '#fff',
  border: '1px solid #454B60',
})
