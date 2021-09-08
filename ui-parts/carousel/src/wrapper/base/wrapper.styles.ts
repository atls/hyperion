import { styleFn } from 'styled-system'

export const createWrapperBaseStyles: styleFn = () => () => ({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
})
