import type { ReactNode } from 'react'

import type { ListProps } from './list.interfaces.js'

import React              from 'react'

import { ListItem }       from './list-item/index.js'
import { ListElement }    from './list.element.js'
import { listSprinkles }  from './list.css.js'

const ListComponent = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
  ref,
  ...props
}: ListProps): ReactNode => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <ListElement ref={ref} sprinkles={listSprinkles as any} {...{ display, boxSizing }} {...props}>
    {children}
  </ListElement>
)

export const List = Object.assign(ListComponent, { Item: ListItem })
