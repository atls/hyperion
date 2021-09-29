import { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = () => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 180,
  margin: 0,
  backgroundColor: '#fff',
  borderRadius: '2px',
  boxShadow:
    '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  zIndex: 1000,
})
