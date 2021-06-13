import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  display: 'flex',
  boxSizing: 'border-box',
})
