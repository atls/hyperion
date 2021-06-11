import { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn => () => ({
  display: 'flex',
  border: '2px solid black',
  boxSizing: 'border-box',
  cursor: 'pointer',
  outline: 'none',
  padding: '5px 10px',
  alignItems: 'center',
  justifyContent: 'space-between',
})
