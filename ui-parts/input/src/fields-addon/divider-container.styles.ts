import { styleFn } from 'styled-system'

export const createDividerContainerStyles = (paddingLeft, paddingRight, size): styleFn =>
  () => ({
    display: 'flex',
    alignItems: 'center',
    height: size,
    paddingLeft,
    paddingRight,
  })
