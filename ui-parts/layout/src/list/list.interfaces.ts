import type { SprinklesFn }    from 'rainbow-sprinkles'
import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

import type { ListSprinkles }  from './list.css.js'

export interface BaseListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'color'> {
  fill?: boolean
  numeric?: boolean
  ref?: Ref<HTMLUListElement>
}

export interface ListElementProps extends BaseListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface ListProps extends BaseListProps, ListSprinkles {}
