import { HTMLAttributes }         from 'react'
import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { GridSprinkles }          from './grid.css.js'

export interface BaseGridProps extends HTMLAttributes<HTMLDivElement> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}

export interface GridElementProps extends BaseGridProps {
  sprinkles: ReturnType<typeof createRainbowSprinkles>
}

export interface GridProps extends BaseGridProps, GridSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
