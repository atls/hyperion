import { keyframes } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

const loadingCircle = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const spinLoadingStyles = style({
  animation: `${loadingCircle} 3s infinite linear`,
})
