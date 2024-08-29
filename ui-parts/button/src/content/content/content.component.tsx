import type { FC }            from 'react'
import type { ReactElement }  from 'react'

import type { ContentProps }  from './content.interfaces.js'

import { Divider }            from '../divider/index.js'
import { useDividedChildren } from '../hooks/index.js'

export const Content: FC<ContentProps> = ({ divider = 12, children }) =>
  useDividedChildren(children, Divider, { divider }) as ReactElement
