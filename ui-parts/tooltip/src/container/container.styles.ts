import { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 30,
  minHeight: 32,
  padding: '6px 8px',
  margin: 0,
  color: '#fff',
  wordWrap: 'break-word',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  borderRadius: '2px',
  boxShadow:
    '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  zIndex: 1000,
}
