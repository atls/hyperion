import type { HTMLElementProps } from '../html-element.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { MainElement }           from './main.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Main = forwardRef<HTMLElement, HTMLElementProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <MainElement ref={ref} sprinkles={htmlElementSprinkles as any} {...props}>
    {children}
  </MainElement>
))

Main.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
