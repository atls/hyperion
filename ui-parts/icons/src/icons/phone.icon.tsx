import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

export const PhoneIcon = (props: IconProps): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      d='M12.2577 20.5067C14.9689 23.1817 19.099 26.9747 22.9602 26.9998C26.5885 27.025 29 24.1823 29 24.1823L23.8551 19.0253L19.7151 20.5458L12.2577 13.0702L13.8245 8.96837L8.87188 4C8.87188 4 6.04503 6.42758 6.00042 9.99838C5.95442 13.7956 9.69011 17.8891 12.2577 20.5067Z'
      stroke='currentColor'
      strokeWidth='1.6'
    />
  </svg>
)
