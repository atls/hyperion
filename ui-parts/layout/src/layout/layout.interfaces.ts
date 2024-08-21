import { HTMLAttributes }         from 'react'
import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { LayoutSprinkles }        from './layout.css.js'

export interface BaseLayoutProps extends HTMLAttributes<HTMLDivElement> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}

export interface LayoutElementProps extends BaseLayoutProps {
  sprinkles: ReturnType<typeof createRainbowSprinkles>
}

export interface LayoutProps extends BaseLayoutProps, LayoutSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
