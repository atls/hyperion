import type { HTMLElementProps } from '../html-element.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { FooterElement }         from './footer.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Footer = forwardRef<HTMLElement, HTMLElementProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <FooterElement ref={ref} sprinkles={htmlElementSprinkles as any} {...props}>
    {children}
  </FooterElement>
))

Footer.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
