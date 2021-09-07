import { styleFn } from 'styled-system'

const createTransitionStyles =
  (transition): styleFn =>
  () => ({
    transition,
  })

export { createTransitionStyles }
