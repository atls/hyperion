import { styleFn } from 'styled-system'

const createBaseStyles = (): styleFn => () => ({
  position: 'relative',
  cursor: 'pointer',
  outline: 'none',
})

export { createBaseStyles }
