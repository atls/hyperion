import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const LockIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      d='M11 13V8.68C11 6.09077 13.2429 4 16 4C18.7571 4 21 6.09077 21 8.68V13M7 13H25V28H7V13Z'
      stroke='currentColor'
      strokeWidth='1.6'
    />
  </svg>
)
