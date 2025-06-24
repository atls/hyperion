import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const UploadIcon = (props: IconProps): ReactNode => {
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
      viewBox='0 0 40 40'
      className={clsx(className, String(otherProps.className || ''))}
      style={iconStyle}
      {...props}
    >
      <path d='M19.531 14.531a.75.75 0 0 0-1.062 0l-6.144 6.144a.75.75 0 0 0 0 1.063l.356.356a.75.75 0 0 0 1.063 0l4.262-4.263v9.419c0 .413.338.75.75.75h.5c.413 0 .75-.337.75-.75v-9.419l4.263 4.263a.75.75 0 0 0 1.062 0l.357-.357a.75.75 0 0 0 0-1.062zm16.2 4.394A6.996 6.996 0 0 0 29 10a6.9 6.9 0 0 0-3 .675A10.99 10.99 0 0 0 17 6C11.1 6 6.269 10.656 6.013 16.513A9 9 0 0 0 0 25c0 4.975 4.025 9 9 9h23c4.419 0 8-3.575 8-8a7.99 7.99 0 0 0-4.269-7.075M32 32H9c-3.869 0-7-3.131-7-7a6.996 6.996 0 0 1 6.063-6.937A9 9 0 0 1 8 17c0-4.969 4.031-9 9-9a9 9 0 0 1 8.337 5.6 4.999 4.999 0 0 1 7.606 6.475A5.994 5.994 0 0 1 38 26c0 3.313-2.687 6-6 6' />
    </svg>
  )
}
