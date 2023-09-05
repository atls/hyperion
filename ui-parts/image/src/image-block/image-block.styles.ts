import { styleFn } from 'styled-system'

export const createBaseImageBlockStyles: styleFn = () => () => ({
  display: 'block',
  objectFit: 'cover',
  height: '100%',
  width: '100%',
})
