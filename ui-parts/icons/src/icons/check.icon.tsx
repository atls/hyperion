import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const CheckIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 18 18'
    {...props}
  >
    <path d='M3.6 9L7.2 13.5L15.3 3.6' stroke='currentColor' strokeWidth='1.1' />
  </svg>
)
