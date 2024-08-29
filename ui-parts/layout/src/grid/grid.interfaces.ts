import type { SprinklesFn }    from 'rainbow-sprinkles/createRuntimeFn'
import type { HTMLAttributes } from 'react'

import type { GridSprinkles }  from './grid.css.js'

export interface BaseGridProps extends HTMLAttributes<HTMLDivElement> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}

export interface GridElementProps extends BaseGridProps {
  sprinkles: SprinklesFn<any>
}

export interface GridProps extends BaseGridProps, GridSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
