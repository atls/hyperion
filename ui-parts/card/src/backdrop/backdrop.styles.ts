import { styleFn } from 'styled-system'

export const baseBackdropStyles: styleFn = () => ({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(31, 31, 39, 0.4)',
  width: '100%',
  height: '100%',
  zIndex: 9990,
})
