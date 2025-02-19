import type { LayoutProps } from './layout.interfaces.js'

import { forwardRef }       from 'react'
import React                from 'react'

import { LayoutElement }    from '@atls-ui-parts/layout'

import { layoutSprinkles }  from './layout.css.js'

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <LayoutElement ref={ref} sprinkles={layoutSprinkles as any} {...props}>
    {children}
  </LayoutElement>
))

Layout.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
