import { styleFn } from 'styled-system'

export const createSlideBaseStyles: styleFn = () => () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '100%',
  height: '100%',
})
