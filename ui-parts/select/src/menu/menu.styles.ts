import { styleFn } from 'styled-system'

export const baseMenuStyles: styleFn = ({ triggerBounds }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  padding: 0,
  width: triggerBounds ? triggerBounds.width : 'auto',
})
