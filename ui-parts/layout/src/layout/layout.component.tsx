import type { LayoutProps } from './layout.interfaces.js'

import { forwardRef }       from 'react'
import React                from 'react'

import { LayoutElement }    from './layout.element.js'
import { layoutSprinkles }  from './layout.css.js'

export const Layout = forwardRef<HTMLDivElement, LayoutProps>((
  { children, display = 'flex', boxSizing = 'border-box', ...props },
  ref
) => (
  <LayoutElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={layoutSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </LayoutElement>
))
