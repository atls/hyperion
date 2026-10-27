import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const MinusIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 12 12'
    {...props}
  >
    <path d='M11.4 5.39999H0.599998V5.99999H11.4V5.39999Z' fill='currentColor' />
  </svg>
)
