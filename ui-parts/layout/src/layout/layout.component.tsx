import type { ReactNode }   from 'react'

import type { LayoutProps } from './layout.interfaces.js'

import { LayoutElement }    from './layout.element.js'
import { layoutSprinkles }  from './layout.css.js'

export const Layout = ({
  children,
  ref,
  display = 'flex',
  boxSizing = 'border-box',
  ...props
}: LayoutProps): ReactNode => (
  <LayoutElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={layoutSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </LayoutElement>
)
