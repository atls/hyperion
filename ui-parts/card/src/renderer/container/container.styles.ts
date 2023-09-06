import { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = () => () => ({
  position: 'fixed',
  width: '100%',
  top: 0,
  height: '100%',
  left: 0,
  zIndex: 1000,
  overflowY: 'scroll',
})
