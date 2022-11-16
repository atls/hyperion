import { styleFn } from 'styled-system'

export const baseMenuStyles: styleFn = ({ triggerBounds }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  padding: 0,
  marginTop: 4,
  width: triggerBounds ? triggerBounds.width : 'auto',
})

export const shapeMenuStyles: styleFn = ({ theme }) => ({
  borderRadius: '8px',
  fontFamily: theme.fonts.primary,
})

export const appearanceMenuStyles = () => ({
  backgroundColor: 'white',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
})
