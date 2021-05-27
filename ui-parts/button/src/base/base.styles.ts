import { styleFn } from 'styled-system'

export const createBaseStyles: styleFn = () => () => ({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  wordBreak: 'break-word',
  cursor: 'pointer',
  outline: 'none',
  padding: 0,
  border: '1px solid transparent',
})
