import type { HTMLElementProps } from '../html-element.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { NavElement }            from './nav.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Nav = forwardRef<HTMLElement, HTMLElementProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <NavElement ref={ref} sprinkles={htmlElementSprinkles as any} {...props}>
    {children}
  </NavElement>
))

Nav.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
