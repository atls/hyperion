import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const UsersIcon = (props: IconProps): ReactNode => {
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
      viewBox='0 0 31 23'
      className={clsx(className, String(otherProps.className || ''))}
      style={iconStyle}
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10.06 18.444V23L31 22.997v-4.553s-.014-1.457-3.107-2.78c-.532-.229-.91-.584-1.326-.973-.754-.708-1.628-1.527-3.753-1.894.842-.87 1.48-2.227 2.135-3.837.33-.81.325-1.516.318-2.429q-.003-.208-.003-.433c0-.239.014-.518.028-.814.035-.739.074-1.574-.079-2.101C24.486.689 22.652 0 20.5 0s-3.99.691-4.714 3.19c-.154.525-.114 1.357-.078 2.094.014.296.028.576.028.814q0 .22-.003.424c-.006.92-.012 1.63.321 2.444.66 1.619 1.287 2.976 2.126 3.842-2.102.372-2.963 1.185-3.706 1.888-.412.39-.788.745-1.319.973-3.081 1.325-3.096 2.775-3.096 2.775m.918-3.775c.476-.624.866-1.473 1.266-2.455.24-.59.237-1.104.232-1.77l-.002-.31c0-.174.01-.377.02-.59.025-.54.054-1.149-.058-1.533-.529-1.814-1.865-2.315-3.43-2.315s-2.9.503-3.43 2.32c-.11.382-.08.99-.056 1.526a13 13 0 0 1 .019.9c-.005.668-.01 1.186.234 1.777.479 1.178.936 2.165 1.547 2.795-1.727.306-3.047 1.02-4.055 1.567-.38.206-.716.387-1.012.515C.01 18.06 0 20.162 0 20.162V23l8.127-.002v-4.574c.005-.536.25-2.221 2.85-3.755'
        clipRule='evenodd'
      />
    </svg>
  )
}
