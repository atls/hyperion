import type { ReactNode }     from 'react'

import type { ListItemProps } from './list-item.interfaces.js'

import React                  from 'react'

import { ListItemElement }    from './list-item.element.js'
import { listSprinkles }      from '../list.css.js'

export const ListItem = ({
  children,
  display = 'flex',
  boxSizing = 'border-box',
  ref,
  ...props
}: ListItemProps): ReactNode => (
  <ListItemElement
    ref={ref}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sprinkles={listSprinkles as any}
    {...{ display, boxSizing }}
    {...props}
  >
    {children}
  </ListItemElement>
)
