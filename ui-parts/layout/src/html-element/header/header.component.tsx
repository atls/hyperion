import type { ReactNode }        from 'react'

import type { HTMLElementProps } from '../html-element.interfaces.js'

import { HeaderElement }         from './header.element.js'
import { htmlElementSprinkles }  from '../html-element.css.js'

export const Header = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
  ref,
  ...props
}: HTMLElementProps): ReactNode => (
  <HeaderElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={htmlElementSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </HeaderElement>
)
