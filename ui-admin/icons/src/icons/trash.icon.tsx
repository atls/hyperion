import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const TrashIcon = (props: IconProps): ReactNode => {
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
      viewBox='0 0 14 16'
      className={clsx(className, String(otherProps.className || ''))}
      style={iconStyle}
      {...otherProps}
    >
      <path
        fill='currentColor'
        d='M13.5 2.5h-2.575L9.863.728A1.5 1.5 0 0 0 8.575 0h-3.15a1.5 1.5 0 0 0-1.287.728L3.075 2.5H.5A.5.5 0 0 0 0 3v.5a.5.5 0 0 0 .5.5H1l.663 10.594A1.5 1.5 0 0 0 3.159 16h7.682a1.5 1.5 0 0 0 1.497-1.406L13 4h.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5m-8.075-1h3.15l.6 1h-4.35zm5.416 13H3.16L2.503 4h8.994z'
      />
    </svg>
  )
}
