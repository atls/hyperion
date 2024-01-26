import { styleFn } from 'styled-system'

export const baseContainerStyles = (): styleFn => () => ({
  display: 'flex',
  width: '100%',
  zIndex: 2000,
  overflowY: 'scroll',
})
