import { FunctionComponent }  from 'react'
import { ReactElement }       from 'react'
import { PropsWithChildren }  from 'react'

import { DividerProps }       from './content.interfaces'
import { Divider }            from './divider.component'
import { useDividedChildren } from './use-divided-children.hook'

export const Content: FunctionComponent<PropsWithChildren<DividerProps>> = ({
  divider = 12,
  children,
}) => useDividedChildren(children, Divider, { divider }) as ReactElement
