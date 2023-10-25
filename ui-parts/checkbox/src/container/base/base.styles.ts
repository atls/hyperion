import { styleFn } from 'styled-system'

export const createContainerBaseStyles: styleFn = () => () => ({
  display: 'flex',
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
  alignItems: 'center',
  outline: 'none',
})
