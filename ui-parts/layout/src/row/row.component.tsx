import type { LayoutProps } from '../layout/index.js'

import { forwardRef }       from 'react'
import React                from 'react'

import { Layout }           from '../layout/index.js'

export const Row = forwardRef<HTMLDivElement, LayoutProps>((
  { width = '100%', flexDirection = 'row', ...props },
  ref
) => <Layout ref={ref} {...{ width, flexDirection }} {...props} />)
