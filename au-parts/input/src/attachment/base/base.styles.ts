import { styleFn } from 'styled-system'

export const createAttachmentBaseStyles: styleFn = () => () => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  lineHeight: 0,
  zIndex: 2,
})
