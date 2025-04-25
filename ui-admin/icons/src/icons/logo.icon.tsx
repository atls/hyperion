import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const LogoIcon = ({ color, ...props }: IconProps): ReactNode => {
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
      viewBox='0 0 48 54'
      className={clsx(className, typeof otherProps?.className === 'string' && otherProps.className)}
      style={iconStyle}
      {...props}
    >
      <path
        fill='#387DFF'
        fillRule='evenodd'
        d='M23.506 51.72a1 1 0 0 0 .988 0l21-11.932a1 1 0 0 0 .506-.87V15.082a1 1 0 0 0-.506-.87l-21-11.931a1 1 0 0 0-.988 0l-21 11.932a1 1 0 0 0-.506.869v23.836a1 1 0 0 0 .506.87z'
        clipRule='evenodd'
      />
      <path
        stroke='#387DFF'
        strokeOpacity={0.2}
        strokeWidth={2}
        d='M24.988 52.589a2 2 0 0 1-1.976 0l-21-11.932A2 2 0 0 1 1 38.918V15.082a2 2 0 0 1 1.012-1.739l21-11.932a2 2 0 0 1 1.976 0l21 11.932A2 2 0 0 1 47 15.082v23.836a2 2 0 0 1-1.012 1.739z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M34.282 37.013a2.99 2.99 0 0 0 2.8 1.987C38.716 39 40 37.65 40 36.011a2.97 2.97 0 0 0-2.96-2.973c-.16 0-.318.014-.462.043L26.18 14.976A2.971 2.971 0 0 0 24 10a2.97 2.97 0 0 0-2.96 2.974c-.002.62.19 1.223.548 1.726l-10.54 18.352h-.088A2.97 2.97 0 0 0 8 36.026 2.97 2.97 0 0 0 10.96 39a2.96 2.96 0 0 0 2.802-1.987zm-10.267-6.355c-.694 0-1.33-.232-1.834-.638l-8.118 5.183 19.626-.178-7.84-5.005a3 3 0 0 1-1.834.638m-.968-5.803a3 3 0 0 0-1.906 3.482l-8.058 5.15L23.047 16.1zm3.87 3.497c.043-.218.072-.435.072-.667a2.97 2.97 0 0 0-1.978-2.815V16.1l9.667 17.194z'
        clipRule='evenodd'
      />
      <path
        fill='#387DFF'
        fillRule='evenodd'
        d='M25 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 14.563a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 37a1 1 0 1 0 0-2 1 1 0 0 0 0 2m27-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M22.18 30.02c.506.406 1.14.638 1.835.638a3 3 0 0 0 1.834-.638l7.84 5.005-19.626.178zm-1.112-2.35a3 3 0 0 1 1.979-2.815V16.1l-9.964 17.387 8.058-5.15a3.3 3.3 0 0 1-.073-.668m5.92.015c0 .232-.028.449-.071.667l7.761 4.942L25.011 16.1v8.77a2.97 2.97 0 0 1 1.978 2.815'
        clipRule='evenodd'
      />
    </svg>
  )
}
