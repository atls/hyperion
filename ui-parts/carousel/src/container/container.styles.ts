import { styleFn } from 'styled-system'

export const createContainerBaseStyles: styleFn = () => () => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  outline: 'none',
})
