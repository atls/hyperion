import { styleFn } from 'styled-system'

export const baseBackdropStyles: styleFn = () => ({
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'flex',
  backgroundColor: 'rgba(31, 31, 39, 0.4)',
  width: '100%',
  height: '100%',
  zIndex: 1000,
})
