import type { ReactNode }        from 'react'

import type { HTMLElementProps } from '../html-element.interfaces.js'

import React                     from 'react'

import { NavElement }            from './nav.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Nav = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
  ref,
  ...props
}: HTMLElementProps): ReactNode => (
  <NavElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={htmlElementSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </NavElement>
)
