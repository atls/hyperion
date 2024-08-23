import { SprinklesFn }     from 'rainbow-sprinkles/createRuntimeFn'
import { HTMLAttributes }  from 'react'

import { LayoutSprinkles } from './layout.css.js'

export interface BaseLayoutProps extends HTMLAttributes<HTMLDivElement> {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}

export interface LayoutElementProps extends BaseLayoutProps {
  sprinkles: SprinklesFn<any>
}

export interface LayoutProps extends BaseLayoutProps, LayoutSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
