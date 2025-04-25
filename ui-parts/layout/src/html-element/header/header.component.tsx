import type { HTMLElementProps } from '../html-element.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { HeaderElement }         from './header.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Header = forwardRef<HTMLElement, HTMLElementProps>((
  { children, display = 'flex', boxSizing = 'border-box', ...props },
  ref
) => (
  <HeaderElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={htmlElementSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </HeaderElement>
))
