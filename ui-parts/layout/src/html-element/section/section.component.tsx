import type { HTMLElementProps } from '../html-element.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { SectionElement }        from './section.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Section = forwardRef<HTMLElement, HTMLElementProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <SectionElement ref={ref} sprinkles={htmlElementSprinkles as any} {...props}>
    {children}
  </SectionElement>
))

Section.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
