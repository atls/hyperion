import { styleFn } from 'styled-system'

export const createContainerBaseStyles: styleFn = () => () => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
  outline: 'none',
  overflow: 'hidden',
})
