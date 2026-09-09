import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const SearchIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      d='M20.75 20.75L26 26M23.375 14.1875C23.375 19.2616 19.2616 23.375 14.1875 23.375C9.11338 23.375 5 19.2616 5 14.1875C5 9.11338 9.11338 5 14.1875 5C19.2616 5 23.375 9.11338 23.375 14.1875Z'
      stroke='currentColor'
      strokeWidth='1.6'
    />
  </svg>
)
