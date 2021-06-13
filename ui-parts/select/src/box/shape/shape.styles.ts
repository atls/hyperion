import { styleFn } from 'styled-system'

export const createOverflowStyles = (): styleFn => () => ({
  overflow: 'auto',
  hyphens: 'auto',
  alignItems: 'center',
})
