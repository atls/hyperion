import type { ReactNode } from 'react'

import type { BoxProps }  from './interfaces.js'

import { cloneElement }   from 'react'
export const Box = ({ children, shape, appearance }: BoxProps): ReactNode =>
  cloneElement(children, {
    style: {
      borderRadius: shape.borderRadius,
      backgroundColor: appearance.backgroundColor,
      boxShadow: appearance.shadow,
      ...children.props.style,
    },
  })
