import type { ReactNode }   from 'react'

import type { LayoutProps } from '../layout/index.js'

import { Layout }           from '../layout/index.js'

export const Row = ({
  ref,
  width = '100%',
  flexDirection = 'row',
  ...props
}: LayoutProps): ReactNode => <Layout ref={ref} {...{ width, flexDirection }} {...props} />
