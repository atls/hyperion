import { style } from '@vanilla-extract/css'

export const baseItemStyles = style({
  width: '100%',
  height: 56,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0',
  textDecoration: 'none',
  boxSizing: 'border-box',
  color: 'black',
})

export const activeItemStyles = style({
  ':after': {
    content: '""',
    width: 2,
    backgroundColor: '#454B60',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
  },
})
