import type { ReactNode }   from 'react'

import type { LayoutProps } from './layout.interfaces.js'

import React                from 'react'

import { LayoutElement }    from '@atls-ui-parts/layout'

import { layoutSprinkles }  from './layout.css.js'

export const Layout = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
  ref,
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
