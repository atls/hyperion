import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'
export const ChevronDownIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 16 16'
    {...props}
  >
    <path stroke='currentColor' strokeWidth={1.03} d='m14 5-6 6-6-6' />
  </svg>
)
