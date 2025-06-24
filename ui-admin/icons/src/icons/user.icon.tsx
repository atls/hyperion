import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const UserIcon = (props: IconProps): ReactNode => {
  const { className, style, otherProps } = iconSprinkles(props)
  const iconStyle = {
    ...style,
    ...otherProps.style,
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 25 25'
      className={clsx(className, String(otherProps.className || ''))}
      style={iconStyle}
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M18.182 5.147C18.182 2.304 15.808 0 12.879 0S7.576 2.304 7.576 5.147v3.86c0 2.843 2.374 5.147 5.303 5.147s5.303-2.304 5.303-5.147zM0 23.53V25l25-.008V23.53c0-4.06-3.392-7.352-7.576-7.352H7.576C3.392 16.177 0 19.468 0 23.529M3.788 3.676h1.515c.418 0 .758.33.758.736s-.34.735-.758.735H3.788v1.47c0 .407-.34.736-.758.736a.747.747 0 0 1-.757-.735v-1.47H.758A.747.747 0 0 1 0 4.411c0-.406.34-.736.758-.736h1.515v-1.47c0-.406.339-.735.757-.735.419 0 .758.329.758.735z'
        clipRule='evenodd'
      />
    </svg>
  )
}
