import { HTMLAttributes } from 'react'

import { GridSprinkles }  from './grid.css.js'

export interface GridProps extends HTMLAttributes<HTMLDivElement>, GridSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
