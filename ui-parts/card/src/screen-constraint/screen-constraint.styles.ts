import { styleFn } from 'styled-system'

export const baseScreenConstraintStyles: styleFn = ({ opened }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 9999,
  overflowY: 'scroll',
  pointerEvents: opened ? 'auto' : 'none',
})
