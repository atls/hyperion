import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const EyeClosedIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      d='M12 12.3718C12.9474 11.5297 14.2767 11 15.7284 11C18.6469 11 21 13.0917 21 15.6859C21 16.9762 20.4041 18.1579 19.4567 19'
      stroke='currentColor'
      strokeWidth='1.6'
    />
    <path
      d='M30 15.5C26.4613 20.99 22.2443 26 15.9926 26C9.74092 26 5.52396 20.99 2 15.5C5.50922 10.01 9.72617 5 15.9779 5C22.2443 5 26.4613 10.01 29.9853 15.5H30Z'
      stroke='currentColor'
      strokeWidth='1.6'
    />
    <path d='M4 5L27 27' stroke='currentColor' strokeWidth='1.6' />
  </svg>
)
