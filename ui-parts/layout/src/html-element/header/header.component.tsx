import type { HTMLElementProps } from '../html-element.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { HeaderElement }         from './header.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Header = forwardRef<HTMLElement, HTMLElementProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <HeaderElement ref={ref} sprinkles={htmlElementSprinkles as any} {...props}>
    {children}
  </HeaderElement>
))

Header.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
