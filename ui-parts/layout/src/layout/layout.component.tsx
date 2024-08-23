import React               from 'react'
import { forwardRef }      from 'react'

import { LayoutElement }   from './layout.element.js'
import { LayoutProps }     from './layout.interfaces.js'
import { layoutSprinkles } from './layout.css.js'

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children, ...props }, ref) => (
  <LayoutElement ref={ref} sprinkles={layoutSprinkles as any} {...props}>
    {children}
  </LayoutElement>
))

Layout.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
