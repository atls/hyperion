import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'
export const PlaceholderIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 100 81'
    {...props}
  >
    <path
      fill='currentColor'
      d='M80.5 26.543c3.038 0 5.5-2.455 5.5-5.483s-2.462-5.483-5.5-5.483S75 18.032 75 21.06s2.462 5.483 5.5 5.483'
    />
    <path stroke='currentColor' d='M2.5 3.115h95v74.77h-95z' />
    <path stroke='currentColor' strokeWidth={1.01} d='m20 55.454 20-19.939 25 24.923' />
    <path stroke='currentColor' strokeWidth={1.01} d='m55 50.47 7.5-7.478L80 60.44' />
  </svg>
)
