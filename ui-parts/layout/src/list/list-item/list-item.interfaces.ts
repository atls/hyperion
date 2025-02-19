import type { SprinklesFn }    from 'rainbow-sprinkles/createRuntimeFn'
import type { HTMLAttributes } from 'react'

import type { ListSprinkles }  from '../list.css.js'

export interface BaseListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'color'> {
  fill?: boolean
}

export interface ListItemElementProps extends BaseListItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface ListItemProps extends BaseListItemProps, ListSprinkles {}
