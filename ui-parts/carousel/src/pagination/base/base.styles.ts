import { styleFn } from 'styled-system'

export const createPaginationBaseStyles: styleFn = () => () => ({
  boxSizing: 'border-box',
  outline: 'none',
  cursor: 'pointer',
})
