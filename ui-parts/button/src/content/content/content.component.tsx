import { FC }                 from 'react'
import { ReactElement }       from 'react'

import { Divider }            from '../divider/index.js'
import { ContentProps }       from './content.interfaces.js'
import { useDividedChildren } from '../hooks/index.js'

export const Content: FC<ContentProps> = ({ divider = 12, children }) =>
  useDividedChildren(children, Divider, { divider }) as ReactElement
