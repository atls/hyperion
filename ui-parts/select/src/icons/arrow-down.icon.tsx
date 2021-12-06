import React from 'react'

export const ArrowDownIcon = ({ active, ...props }) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 13 8'
    fill='none'
    style={{ transform: (!active && 'rotate(180deg)') || 'none' }}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M11.5 6.5L6.5 1.5L1.5 6.5'
      stroke={props.color || '#232837'}
      strokeWidth={1.4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
