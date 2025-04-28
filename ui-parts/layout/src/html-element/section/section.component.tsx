import type { ReactNode }        from 'react'

import type { HTMLElementProps } from '../html-element.interfaces.js'

import React                     from 'react'

import { SectionElement }        from './section.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Section = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
  ref,
  ...props
}: HTMLElementProps): ReactNode => (
  <SectionElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={htmlElementSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </SectionElement>
)
