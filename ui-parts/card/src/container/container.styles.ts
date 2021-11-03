import { styleFn } from 'styled-system'

export const baseContainerStyles =
  (): styleFn =>
  ({ fill }) => ({
    position: 'absolute',
    left: 0,
    zIndex: 9999,
    display: 'flex',
    width: '100%',
    minHeight: fill ? '100%' : 'auto',
    overflowY: 'scroll',
  })
