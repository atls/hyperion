import { styleFn } from 'styled-system'

export const createFieldAddonsContainerStyles =
  (size): styleFn =>
  () => ({
    height: size,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  })
