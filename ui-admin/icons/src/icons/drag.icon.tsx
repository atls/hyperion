import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const DragIcon = (props: IconProps): ReactNode => {
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
      viewBox='0 0 16 12'
      className={clsx(className, String(otherProps.className || ''))}
      style={iconStyle}
      {...otherProps}
    >
      <path
        fill='currentColor'
        d='M15.571 1.787H.43C.192 1.787 0 1.616 0 1.404V.383C0 .171.192 0 .429 0H15.57c.237 0 .429.171.429.383v1.021c0 .212-.192.383-.429.383m0 5.107H.43C.192 6.894 0 6.722 0 6.51V5.489c0-.211.192-.383.429-.383H15.57c.237 0 .429.172.429.383v1.022c0 .211-.192.383-.429.383m0 5.106H.43C.192 12 0 11.829 0 11.617v-1.021c0-.212.192-.383.429-.383H15.57c.237 0 .429.171.429.383v1.021c0 .211-.192.383-.429.383'
      />
    </svg>
  )
}
