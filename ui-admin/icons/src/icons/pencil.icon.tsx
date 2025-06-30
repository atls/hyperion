import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const PencilIcon = (props: IconProps): ReactNode => {
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
      fill='currentColor'
      className={clsx(className, String(otherProps.className || ''))}
      viewBox='0 0 24 24'
      style={iconStyle}
      {...otherProps}
    >
      <path
        fill='none'
        d='m16.589 9-1.586-1.586-9.097 9.097-.529 2.114 2.114-.528zm2.999-3-1.586 1.586L16.416 6l1.586-1.586z'
      />
      <path d='M4.003 21q.122 0 .242-.03l4-1c.176-.044.337-.135.465-.263L21.003 7.414c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414L19.417 3c-.756-.756-2.072-.756-2.828 0L4.296 15.293a1 1 0 0 0-.263.464l-1 4A1 1 0 0 0 4.003 21m14-16.586L19.589 6l-1.586 1.586L16.417 6zM5.906 16.511l9.097-9.097L16.589 9l-9.098 9.097-2.114.528z' />
    </svg>
  )
}
