import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'
export const LinkExternalIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    overflow='visible'
    preserveAspectRatio='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <g stroke='currentColor'>
      <path d='M6 4h4v4M4.5 9.5 10 4' />
    </g>
  </svg>
)
