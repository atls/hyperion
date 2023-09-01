import { styleFn } from 'styled-system'

export const createContainerBaseStyles: styleFn = () => () => ({
  display: 'flex',
  position: 'relative',
  userSelect: 'none',
  cursor: 'pointer',
  alignItems: 'center',
  outline: 'none',
})
