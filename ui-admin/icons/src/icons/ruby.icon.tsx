import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const RubyIcon = ({ color, ...props }: IconProps): ReactNode => {
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
      viewBox='0 0 33 28'
      className={clsx(className, typeof otherProps?.className === 'string' && otherProps.className)}
      style={iconStyle}
      {...props}
    >
      <path
        fill='#387DFF'
        fillRule='evenodd'
        d='M26.94 0s4.777 7.582 5.665 8.573c.888.99 0 2.592 0 2.592L18.497 26.773c-2.055 2.76-3.889 0-3.889 0S1.444 12.517.444 11.278c-1-1.24 0-2.874 0-2.874L7.054 0zm-4.028 8.936 1.111-.066V6.682h-5.62V8.87l2.157.132-3.855 8.75-3.253-8.816h1.98V6.682h-6.11V8.87l1.488.066 5.47 12.461h1.013z'
        clipRule='evenodd'
      />
    </svg>
  )
}
