import type { ReactNode }   from 'react'

import type { LayoutProps } from '../layout/index.js'

import React                from 'react'

import { Layout }           from '../layout/index.js'

export const Column = ({
  height = '100%',
  flexDirection = 'column',
  ref,
  ...props
}: LayoutProps): ReactNode => <Layout {...{ height, flexDirection }} {...props} ref={ref} />
