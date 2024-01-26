import { styleFn } from 'styled-system'

export const createBaseImageBlockStyles: styleFn = () => () => ({
  display: 'block',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
})
