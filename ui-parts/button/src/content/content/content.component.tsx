import type { ReactNode }     from 'react'
import type { ReactElement }  from 'react'

import type { ContentProps }  from './content.interfaces.js'

import { Divider }            from '../divider/index.js'
import { useDividedChildren } from '../hooks/index.js'

export const Content = ({ divider = 12, children }: ContentProps): ReactNode =>
  useDividedChildren(children, Divider, { divider }) as ReactElement
