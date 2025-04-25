import type { ListProps } from './list.interfaces.js'

import { forwardRef }     from 'react'
import React              from 'react'

import { ListItem }       from './list-item/index.js'
import { ListElement }    from './list.element.js'
import { listSprinkles }  from './list.css.js'

const ListComponent = forwardRef<HTMLUListElement, ListProps>((
  { children, display = 'flex', boxSizing = 'border-box', ...props },
  ref
) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <ListElement ref={ref} sprinkles={listSprinkles as any} {...{ display, boxSizing }} {...props}>
    {children}
  </ListElement>
))

export const List = Object.assign(ListComponent, { Item: ListItem })
