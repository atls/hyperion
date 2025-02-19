import type { ListItemProps } from './list-item.interfaces.js'

import { forwardRef }         from 'react'
import React                  from 'react'

import { ListItemElement }    from './list-item.element.js'
import { listSprinkles }      from '../list.css.js'

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({ children, ...props }, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <ListItemElement ref={ref} sprinkles={listSprinkles as any} {...props}>
    {children}
  </ListItemElement>
))

ListItem.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
