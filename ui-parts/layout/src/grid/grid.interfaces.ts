import type { SprinklesFn }    from 'rainbow-sprinkles'
import type { HTMLAttributes } from 'react'

import type { GridSprinkles }  from './grid.css.js'

export interface BaseGridProps extends HTMLAttributes<HTMLDivElement> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}

export interface GridElementProps extends BaseGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprinkles: SprinklesFn<any>
}

export interface GridProps extends BaseGridProps, GridSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
