import { styleFn } from 'styled-system'

export const baseContainerStyles = (): styleFn => () => ({
  width: '100%',
  zIndex: 2000,
  display: 'flex',
  overflowY: 'scroll',
})
