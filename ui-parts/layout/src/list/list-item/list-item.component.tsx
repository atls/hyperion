import type { ListItemProps } from './list-item.interfaces.js'

import { forwardRef }         from 'react'
import React                  from 'react'

import { ListItemElement }    from './list-item.element.js'
import { listSprinkles }      from '../list.css.js'

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>((
  { children, display = 'flex', boxSizing = 'border-box', ...props },
  ref
) => (
  <ListItemElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={listSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </ListItemElement>
))
