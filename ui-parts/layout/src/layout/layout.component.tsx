import type { LayoutProps } from './layout.interfaces.js'

import { forwardRef }       from 'react'
import React                from 'react'

import { LayoutElement }    from './layout.element.js'
import { layoutSprinkles }  from './layout.css.js'

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children, ...props }, ref) => (
  <LayoutElement ref={ref} sprinkles={layoutSprinkles as any} {...props}>
    {children}
  </LayoutElement>
))

Layout.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
