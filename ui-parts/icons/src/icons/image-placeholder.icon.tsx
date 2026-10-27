import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const ImagePlaceholderIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 120 98'
    {...props}
  >
    <path fill='#DADFE8' d='M0 0h120v98H0z' />
    <path fill='#F8F9FF' d='M-385-59h943v427h-943z' />
    <path
      fill='#0C0F1E'
      d='M96.6 32.114c3.645 0 6.6-2.97 6.6-6.634s-2.955-6.634-6.6-6.634-6.6 2.97-6.6 6.634 2.955 6.634 6.6 6.634'
    />
    <path stroke='#0C0F1E' d='M117 3.77H3v90.46h114z' />
    <path
      stroke='#0C0F1E'
      strokeWidth={1.01}
      d='M24 67.092 48 42.97l30 30.154M66 61.062l9-9.047 21 21.108'
    />
  </svg>
)
