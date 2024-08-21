import { BaseGridProps } from '@atls-ui-parts/layout'

import { GridSprinkles } from './grid.css.js'

export interface GridProps extends BaseGridProps, GridSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
