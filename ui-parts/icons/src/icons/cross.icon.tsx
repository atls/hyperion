import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const CrossIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 32 32'
    {...props}
  >
    <path d='M26 26L5 5M26 5L5 26' stroke='currentColor' strokeWidth='1.6' />
  </svg>
)
