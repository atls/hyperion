import { styleFn } from 'styled-system'

const createBaseStyles = (): styleFn => () => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export { createBaseStyles }
