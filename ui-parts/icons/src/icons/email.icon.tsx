import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const EmailIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 32 32'
    {...props}
  >
    <path d='M3 7V25H29V7H3ZM27.5556 23.5H4.44444V8.5H27.5556V23.5Z' fill='currentColor' />
    <path d='M4 10L16 17L28 10' stroke='currentColor' strokeWidth='1.6' />
  </svg>
)
