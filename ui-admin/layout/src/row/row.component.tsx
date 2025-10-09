import type { ReactNode }   from 'react'

import type { LayoutProps } from '../layout/index.js'

import { Layout }           from '../layout/index.js'

export const Row = ({
  width = '100%',
  flexDirection = 'row',
  ref,
  ...props
}: LayoutProps): ReactNode => <Layout {...{ width, flexDirection }} {...props} ref={ref} />
