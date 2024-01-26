import { styleFn } from 'styled-system'

export const createContainerBaseStyles: styleFn = () => () => ({
  display: 'flex',
  position: 'relative',
  cursor: 'pointer',
  alignItems: 'center',
  userSelect: 'none',
  outline: 'none',
})
