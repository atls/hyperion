import { styleFn } from 'styled-system'

export const createBaseImageBlockStyles: styleFn = () => () => ({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})
