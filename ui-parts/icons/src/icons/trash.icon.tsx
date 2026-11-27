import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'
export const TrashIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 12 12'
    {...props}
  >
    <path stroke='currentColor' d='M3.9 1.8V.9h4.2v.9M2.7 2.4v8.7h6.6V2.4' />
    <path fill='currentColor' d='M5.4 4.2h-.6v5.4h.6zM7.2 4.2h-.6v5.4h.6zM10.8 1.8H1.2v.6h9.6z' />
  </svg>
)
