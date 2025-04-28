import type { ReactNode }   from 'react'

import type { LayoutProps } from '../layout/index.js'

import React                from 'react'

import { Layout }           from '../layout/index.js'

export const Column = ({
  ref,
  height = '100%',
  flexDirection = 'column',
  ...props
}: LayoutProps): ReactNode => <Layout ref={ref} {...{ height, flexDirection }} {...props} />
