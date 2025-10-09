import type { ReactNode }        from 'react'

import type { HTMLElementProps } from '../html-element.interfaces.js'

import { MainElement }           from './main.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Main = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
  ref,
  ...props
}: HTMLElementProps): ReactNode => (
  <MainElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={htmlElementSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </MainElement>
)
