import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'
export const CloudUploadIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 20 20'
    {...props}
  >
    <g stroke='currentColor' clipPath='url(#prefix__a)'>
      <path
        strokeWidth={1.1}
        d='M6.5 13.77H3.75C1.96 13.77.5 12.33.5 10.55c0-1.63 1.22-2.98 2.81-3.19.07-2.89 2.44-5.2 5.37-5.2 2.51 0 4.63 1.71 5.21 4.02.5-.22 1.04-.34 1.61-.34 2.21 0 4 1.77 4 3.96s-1.79 3.96-4 3.96h-3'
      />
      <path d='M9.51 9.34v9M6.34 11.85l3.17-3.17 3.17 3.17' />
    </g>
    <defs>
      <clipPath id='prefix__a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
)
