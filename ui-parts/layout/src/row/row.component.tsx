import React           from 'react'
import { forwardRef }  from 'react'

import { Layout }      from '../layout/index.js'
import { LayoutProps } from '../layout/index.js'

export const Row = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => (
  <Layout ref={ref} {...props} />
))

Row.defaultProps = {
  flexDirection: 'row',
  width: '100%',
}
