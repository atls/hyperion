import type { HTMLElementProps } from '../html-element.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { MainElement }           from './main.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Main = forwardRef<HTMLElement, HTMLElementProps>((
  { children, display = 'flex', boxSizing = 'border-box', ...props },
  ref
) => (
  <MainElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={htmlElementSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </MainElement>
))
