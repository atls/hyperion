import type { ReactNode } from 'react'

import type { IconProps } from '../icons.interfaces.js'

import { clsx }           from 'clsx'
import React              from 'react'

import { iconSprinkles }  from '../icon.css.js'

export const BagIcon = (props: IconProps): ReactNode => {
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
      viewBox='0 0 25 28'
      className={clsx(className, String(otherProps.className || ''))}
      style={iconStyle}
      {...otherProps}
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='m17.329 1.863.223-.278-.038-.077.011-.04c.014-.05.028-.1.028-.154a.79.79 0 0 0-.507-.736l-.026-.05S14.507-.01 12.234 0C10.06.01 7.447.528 7.447.528l-.025.05c-.3.117-.512.4-.512.737 0 .059.016.113.032.167l.01.031-.038.072.204.254.02.023.018.022 1.887 2.342h6.38l1.893-2.347.004-.005zM12.499 28C3.693 28 0 24.871 0 18.442 0 13.116 4.189 7.558 9.266 5.805h6.468C20.813 7.558 25 13.115 25 18.442 24.999 24.872 21.306 28 12.5 28m3.465-10.566v-.002a1.06 1.06 0 0 0 1.056-1.054c0-.583-.473-1.053-1.056-1.056v-.004h-2.145q.002-.018 0-.035l-.001-.033 2.512-2.55c.41-.46.202-.836-.212-1.253-.417-.418-1.099-.506-1.435-.141l-2.16 2.286-2.334-2.317c-.294-.293-.87-.199-1.284.213-.413.41-.51.982-.215 1.274l2.388 2.37a.5.5 0 0 0-.091.187h-1.94v.003h-.005c-.588 0-1.063.472-1.063 1.057a1.06 1.06 0 0 0 1.063 1.055l.005-.001v.002h2.126v1.053H9.047v.003h-.005a1.06 1.06 0 0 0-1.063 1.057 1.06 1.06 0 0 0 1.063 1.055h2.131v1.064h.023a1.326 1.326 0 0 0 1.304 1.578 1.326 1.326 0 0 0 1.305-1.578h.013v-1.064h2.148a1.06 1.06 0 0 0 1.056-1.055c0-.583-.473-1.053-1.056-1.056v-.004h-2.148v-1.053z'
        clipRule='evenodd'
      />
    </svg>
  )
}
