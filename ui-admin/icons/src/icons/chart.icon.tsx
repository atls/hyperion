import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const ChartIcon = (props: IconProps): ReactNode => {
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
      viewBox='0 0 29 28'
      className={clsx(className, String(otherProps.className || ''))}
      style={iconStyle}
      {...otherProps}
    >
      <path
        fill='#23B899'
        fillRule='evenodd'
        d='M26.934 0H2.062C.922 0 0 1.043 0 2.332v23.336C0 26.957.922 28 2.062 28h24.876C28.078 28 29 26.957 29 25.668V2.332C28.996 1.043 28.074 0 26.934 0m-2.387 8.974-5.155 9.001c-.286.5-.773.856-1.35.98a2.13 2.13 0 0 1-1.65-.323l-5.487-3.802-2.944 4.282a2.08 2.08 0 0 1-1.716.89c-.395 0-.79-.109-1.144-.335-.946-.614-1.204-1.856-.572-2.774l4.129-6c.31-.45.793-.759 1.345-.856a2.1 2.1 0 0 1 1.57.34l5.342 3.7 4.028-7.049c.551-.96 1.808-1.312 2.803-.777.999.539 1.357 1.758.801 2.723'
        clipRule='evenodd'
      />
    </svg>
  )
}
