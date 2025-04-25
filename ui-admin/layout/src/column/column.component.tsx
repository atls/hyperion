import type { LayoutProps } from '../layout/index.js'

import { forwardRef }       from 'react'
import React                from 'react'

import { Layout }           from '../layout/index.js'

export const Column = forwardRef<HTMLDivElement, LayoutProps>((
  { height = '100%', flexDirection = 'column', ...props },
  ref
) => <Layout ref={ref} {...{ height, flexDirection }} {...props} />)
