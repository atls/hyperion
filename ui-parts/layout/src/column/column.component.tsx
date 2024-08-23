import React           from 'react'
import { forwardRef }  from 'react'

import { Layout }      from '../layout/index.js'
import { LayoutProps } from '../layout/index.js'

export const Column = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => (
  <Layout ref={ref} {...props} />
))

Column.defaultProps = {
  flexDirection: 'column',
  height: '100%',
}
