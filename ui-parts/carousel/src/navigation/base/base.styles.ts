import { styleFn } from 'styled-system'

export const createNavigationBaseStyles: styleFn = () => () => ({
  boxSizing: 'border-box',
  outline: 'none',
  cursor: 'pointer',
  position: 'absolute',
  zIndex: 2,
})
