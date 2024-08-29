import type { LayoutProps } from '../layout/index.js'

import { forwardRef }       from 'react'
import React                from 'react'

import { Layout }           from '../layout/index.js'

export const Column = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => (
  <Layout ref={ref} {...props} />
))

Column.defaultProps = {
  flexDirection: 'column',
  height: '100%',
}
