import { styleFn } from 'styled-system'

export const createBaseStyles: styleFn = () => () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  padding: 0,
  margin: 0,
  position: 'relative',
  overflow: 'hidden',
  borderStyle: 'solid',
  boxSizing: 'border-box',
})
