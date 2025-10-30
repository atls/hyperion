import { style }     from '@vanilla-extract/css'
import { keyframes } from '@vanilla-extract/css'

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const backdropStyles = style({
  display: 'grid',
  placeItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  animation: `${fadeIn} 0.2s ease-out`,
  zIndex: 1,
})

export const containerStyles = style({
  padding: '40px',
  background: '#ffffff',
})
