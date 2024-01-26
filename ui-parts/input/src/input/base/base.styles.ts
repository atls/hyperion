import { styleFn } from 'styled-system'

export const createBaseStyles: styleFn = () => () => ({
  display: 'flex',
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  width: '100%',
  border: '1px solid transparent',
  borderRadius: 0,
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'text',
})
