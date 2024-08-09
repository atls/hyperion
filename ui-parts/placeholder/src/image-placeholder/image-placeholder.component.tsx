import React                     from 'react'

import { ImagePlaceholderProps } from './image-placeholder.interfaces.js'

export const ImagePlaceholder = ({
  color = '#A0A4B3',
  size = 80,
  ...props
}: ImagePlaceholderProps) => (
  <svg viewBox='0 0 80 80' fill='none' {...props} width={size} height={size}>
    <path
      d='M62.6999 9.90002H16.4999C12.8548 9.90002 9.8999 12.8549 9.8999 16.5V62.7C9.8999 66.3451 12.8548 69.3 16.4999 69.3H62.6999C66.345 69.3 69.2999 66.3451 69.2999 62.7V16.5C69.2999 12.8549 66.345 9.90002 62.6999 9.90002Z'
      stroke={color}
      strokeWidth={6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M28.0501 33C30.7839 33 33.0001 30.7838 33.0001 28.05C33.0001 25.3162 30.7839 23.1 28.0501 23.1C25.3163 23.1 23.1001 25.3162 23.1001 28.05C23.1001 30.7838 25.3163 33 28.0501 33Z'
      stroke={color}
      strokeWidth={6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M69.3 49.5L52.8 33L16.5 69.3'
      stroke={color}
      strokeWidth={6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
