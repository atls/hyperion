import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  padding: 0,
})
