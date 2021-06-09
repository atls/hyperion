import { styleFn } from 'styled-system'

export const createBoxBaseStyles: styleFn = () => () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  borderStyle: 'solid',
  boxSizing: 'border-box',
})
