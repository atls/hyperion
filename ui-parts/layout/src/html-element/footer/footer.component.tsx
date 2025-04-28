import type { ReactNode }        from 'react'

import type { HTMLElementProps } from '../html-element.interfaces.js'

import React                     from 'react'

import { FooterElement }         from './footer.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Footer = ({
  children,
  ref,
  display = 'flex',
  boxSizing = 'border-box',
  ...props
}: HTMLElementProps): ReactNode => (
  <FooterElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={htmlElementSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </FooterElement>
)
